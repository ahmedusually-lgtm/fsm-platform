#!/usr/bin/env bash
set -euo pipefail
npm ci --legacy-peer-deps
npm run build
CI=true npm test -- --watchAll=false
python -m pytest -q src/tests/
