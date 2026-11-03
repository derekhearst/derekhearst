#!/usr/bin/env bash
# Render the link-preview image and PNG favicons from scripts/og.html with headless Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
PAGE="file:///$(cygpath -m "$PWD/scripts/og.html")"
shot() { "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
	--default-background-color=00000000 --virtual-time-budget=3000 \
	--window-size="$1" --screenshot="$(cygpath -w "$PWD/$2")" "$3" 2>/dev/null; }

shot 1200,630 static/og.png "$PAGE"
shot 512,512 scripts/icon-512.png "$PAGE#favicon"

python -I - <<'EOF'
from PIL import Image
icon = Image.open('scripts/icon-512.png').convert('RGBA')
icon.resize((180, 180), Image.LANCZOS).save('static/apple-touch-icon.png')
icon.save('static/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
og = Image.open('static/og.png').convert('RGB')
og.save('static/og.png', optimize=True)
print('og', og.size)
EOF
rm scripts/icon-512.png
ls -la static/og.png static/apple-touch-icon.png static/favicon.ico
