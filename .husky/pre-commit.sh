#!/bin/bash
. "$(dirname "$0")/_/husky.sh"

yarn run lint-staged --concurrent false