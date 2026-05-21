# Chrome Web Store Listing

## Name

BJ's Auto Coupon Clipper

## Summary

Clip every BJ's coupon with one click. Scrolls, clicks, refreshes when needed, and keeps you from missing a deal.

## Detailed Description

Tired of manually clicking every coupon on BJ's Wholesale Club?

BJ's Auto Coupon Clipper does it for you automatically. Visit the BJ's coupons page, press Start, and the extension scrolls through the page, clips every available coupon, and recovers from common loading hiccups along the way.

Clean interface. No clutter. No tracking.

Features:

- One-click control with a Start/Cancel button
- Automatically scrolls and clips all available coupons
- Recovers from errors like "Please refresh the page"
- Real-time status updates: Idle, Ready, Clipping, Complete
- Secure and lightweight: no trackers, no third-party code
- Styled to feel native to BJ's, without using BJ's branding

How to use:

1. Go to the BJ's coupons page.
2. Click the extension icon in your Chrome toolbar.
3. Press Start to begin clipping.
4. Press Cancel to stop at any time.

The extension will scroll, clip, and refresh the page as needed. No extra setup required.

Built with native WebExtension APIs.

## Category

Shopping

## Language

English

## Website

https://www.bjs.com/myCoupons

## Privacy Practices

Single purpose:

Automatically clip coupons on the BJ's Wholesale Club coupons page after the user presses Start.

Storage permission justification:

Stores the extension's local run status, clipped coupon count, and status message so the popup can show progress while the content script clips coupons.

Host permission justification:

Needed only on `https://www.bjs.com/*` so the content script can run on the BJ's coupons page and click visible "Clip to Card" buttons at the user's request.

Data collection:

This extension does not collect, sell, transmit, or share user data. It does not use analytics, tracking, remote code, or third-party services.

Data usage certifications:

- Does not collect personally identifiable information.
- Does not collect health information.
- Does not collect financial or payment information.
- Does not collect authentication information.
- Does not collect personal communications.
- Does not collect location.
- Does not collect web history.
- Does not collect user activity.
- Does not collect website content.

## Upload Files

- Extension package: `dist/bjs-auto-coupon-clipper-chrome-store.zip`
- Screenshot: `store-assets/screenshot-1280x800.png`
- Small promo tile: `store-assets/promo-440x280.png`
- Store icon: included in package as `icons/icon-128.png`
