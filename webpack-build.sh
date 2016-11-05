#! /usr/bin/env bash
./node_modules/.bin/webpack
echo "renaming AMD define to enifed"
sed -i '' 's/define(/enifed(/' dist/hello.js