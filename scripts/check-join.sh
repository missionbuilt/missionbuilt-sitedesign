#!/usr/bin/env bash
# The /join go-live check (#133; Mike, 2026-10-11): the page a board's QR lands on must run no
# script at all. Cloudflare's Email Address Obfuscation stays on and injects its decode script
# into any page with an email address, so /join shows none. Run against the live site, or a
# preview deployment's address, before testers scan:
#   bash scripts/check-join.sh                      # https://missionbuilt.io
#   bash scripts/check-join.sh https://<preview>.missionbuilt.pages.dev
set -euo pipefail
base="${1:-https://missionbuilt.io}"
fail=0
for path in /join /join/; do
  html=$(curl -sL "$base$path")
  head=$(curl -sIL "$base$path")
  scripts=$(grep -ciE '<script|cdn-cgi|email-decode|cloudflareinsights|zaraz' <<<"$html" || true)
  emails=$(grep -oiE '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}|__cf_email__' <<<"$html" | sort -u | tr '\n' ' ' || true)
  csp=$(grep -i '^content-security-policy:' <<<"$head" | tr -d '\r' || true)
  echo "$path: scripts=$scripts emails=[${emails}]"
  echo "  $csp"
  [ "$scripts" = "0" ] && [ -z "$emails" ] && grep -q "script-src 'none'" <<<"$csp" || fail=1
done
aasa=$(curl -sIL "$base/.well-known/apple-app-site-association" | tr -d '\r' | grep -iE '^(HTTP|content-type)' || true)
echo "apple-app-site-association: $aasa"
grep -qi 'application/json' <<<"$aasa" || fail=1
[ $fail = 0 ] && echo "PASS: /join runs no script and shows no email address" || { echo "FAIL"; exit 1; }
