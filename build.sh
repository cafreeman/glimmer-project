#! /usr/bin/env bash
echo "Cleaning up old files"
rm -rf build dist/hello.js
[[ -d dist ]] || mkdir -p dist
echo "Compiling source to amd -> build/hello.js"
tsc -p old-tsconfig.json --outfile build/hello.js
# tsc
echo "renaming AMD define to enifed"
cat build/hello.js | sed 's/define(/enifed(/' > dist/hello.js