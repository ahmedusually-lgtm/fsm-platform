#!/usr/bin/env bash
set -euo pipefail
CI=true npm test -- --coverage --watchAll=false
