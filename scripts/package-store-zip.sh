#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
DIST_DIR="$ROOT_DIR/dist"
PACKAGE="$DIST_DIR/bjs-auto-coupon-clipper-chrome-store.zip"

mkdir -p "$DIST_DIR"
rm -f "$PACKAGE"

cd "$ROOT_DIR"
zip -q -r "$PACKAGE" \
  manifest.json \
  content.js \
  popup.html \
  popup.js \
  icons \
  LICENSE

zip -T "$PACKAGE" >/dev/null
printf '%s\n' "$PACKAGE"
