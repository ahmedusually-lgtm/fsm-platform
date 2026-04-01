#!/usr/bin/env bash
set -euo pipefail
case "" in
  health) bash agents/tasks/daily-health-check.sh ;;
  *) echo "Usage: bash automation/run-agent.sh health" ;;
esac
