#! /usr/bin/env bash
echo "Cleaning up old files"
rm -rf build dist/hello.js
echo "Compiling source to amd -> build/hello.js"
tsc --outfile build/hello.js
echo "renaming AMD define to enifed"
cat build/hello.js | sed 's/define(/enifed(/' > dist/hello.js