#!/bin/bash

yarn run build
npm version patch --no-git-tag-version
npm publish