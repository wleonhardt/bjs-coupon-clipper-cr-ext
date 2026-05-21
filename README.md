# BJ's Auto Coupon Clipper for Chrome

Automatically clip every available coupon on [BJ's Wholesale Club](https://www.bjs.com/myCoupons) with a single click.

This Chrome extension scrolls through the coupons page, clicks all "Clip to Card" buttons, and handles errors like "Please refresh" automatically. It is a 1:1 Chrome port of the Firefox extension, with the same popup workflow and clipping behavior.

## Install Locally

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select this project folder
5. Visit [https://www.bjs.com/myCoupons](https://www.bjs.com/myCoupons)
6. Click the BJ's Auto Coupon Clipper icon and press **Start**

The extension will continue clipping until all coupons are added. Press **Cancel** in the popup to stop.

## Features

- One-click control - Start/Cancel via popup
- Auto-scroll - Loads and clips all visible coupons
- Error recovery - Detects issues and refreshes the page
- Smart status - Shows Idle, Ready, Clipping, Complete
- UI-matching - Inspired by BJ's visual theme; no logos used
- No bloat - Lightweight, no tracking, no third-party code

## For Developers

This extension ships as plain JavaScript files. There is no bundler and no runtime dependency.

Key files:

- `manifest.json` - Chrome Manifest V3 extension manifest
- `content.js` - Coupon clipping loop injected on BJ's coupons page
- `popup.html` / `popup.js` - Toolbar popup UI and control logic
- `icons/` - Extension icons for Chrome and Chrome Web Store

## Chrome Web Store Package

Build the upload ZIP:

```bash
./scripts/package-store-zip.sh
```

The generated file is `dist/bjs-auto-coupon-clipper-chrome-store.zip`. It contains `manifest.json` at the ZIP root, includes the extension runtime files only, and is suitable for upload in the Chrome Developer Dashboard.

## Attribution

Inspired by [Sleevetrick's BJ's Coupon Clicker script](https://greasyfork.org/en/scripts/424555) and early Chrome automation projects. This is a Chrome port of the Firefox extension.

## License

Mozilla Public License 2.0 - see [LICENSE](LICENSE)
