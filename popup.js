document.addEventListener("DOMContentLoaded", async () => {
  const toggleBtn = document.getElementById("toggle");
  const progressEl = document.getElementById("progress");
  const statusPill = document.getElementById("status-pill");
  const messageEl = document.getElementById("message");

  const COUPONS_URL = "https://www.bjs.com/myCoupons";
  const extensionApi = globalThis.browser || globalThis.chrome;

  const PILL_CLASSES = {
    idle: "",
    ready: "status-ready",
    running: "status-running",
    validating: "status-running",
    complete: "status-complete",
    error: "status-error"
  };

  const storage = {
    get(keys) {
      return new Promise((resolve, reject) => {
        extensionApi.storage.local.get(keys, (items) => {
          const err = extensionApi.runtime.lastError;
          if (err) reject(new Error(err.message));
          else resolve(items);
        });
      });
    }
  };

  function tabsQuery(queryInfo) {
    return new Promise((resolve, reject) => {
      extensionApi.tabs.query(queryInfo, (tabs) => {
        const err = extensionApi.runtime.lastError;
        if (err) reject(new Error(err.message));
        else resolve(tabs);
      });
    });
  }

  function sendTabMessage(tabId, message) {
    return new Promise((resolve, reject) => {
      extensionApi.tabs.sendMessage(tabId, message, (response) => {
        const err = extensionApi.runtime.lastError;
        if (err) reject(new Error(err.message));
        else resolve(response);
      });
    });
  }

  function isActive(runState) {
    return runState === "running" || runState === "validating";
  }

  async function getActiveTabUrl() {
    const [tab] = await tabsQuery({ active: true, currentWindow: true });
    return tab?.url || "";
  }

  function render({ tabOk, state }) {
    const { runState = "idle", totalClipped = 0, message = "" } = state;

    if (!tabOk) {
      toggleBtn.disabled = true;
      toggleBtn.textContent = "Start";
      progressEl.textContent = "";
      messageEl.innerHTML = "";
      statusPill.className = "status-pill";
      statusPill.innerHTML = "";
      const link = document.createElement("a");
      link.href = COUPONS_URL;
      link.textContent = "Coupons";
      link.target = "_blank";
      statusPill.appendChild(link);
      return;
    }

    toggleBtn.disabled = false;
    toggleBtn.textContent = isActive(runState) ? "Cancel" : "Start";
    progressEl.textContent = `Clipped: ${totalClipped}`;
    messageEl.textContent = message;

    const pillClass = PILL_CLASSES[runState] || "";
    statusPill.className = "status-pill" + (pillClass ? ` ${pillClass}` : "");
    statusPill.textContent = runState.charAt(0).toUpperCase() + runState.slice(1);
  }

  async function refresh() {
    const url = await getActiveTabUrl();
    const tabOk = /^https:\/\/www\.bjs\.com\/myCoupons/.test(url);
    const state = await storage.get(["runState", "totalClipped", "message"]);
    render({ tabOk, state });
  }

  // Live updates from content script writing to storage
  extensionApi.storage.onChanged.addListener((changes, area) => {
    if (area === "local") refresh();
  });

  // Toggle start/stop
  toggleBtn.addEventListener("click", async () => {
    const { runState = "idle" } = await storage.get("runState");
    const starting = !isActive(runState);
    const [tab] = await tabsQuery({ active: true, currentWindow: true });

    if (tab?.id) {
      const command = starting ? "start-clipping" : "stop-clipping";
      sendTabMessage(tab.id, command).catch((err) => {
        console.warn("Could not send message to tab:", err.message);
      });
    }
  });

  refresh();
});
