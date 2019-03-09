#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# copy readme to dist
cp README.md dist/

# navigate into the build output directory
cd dist

# deploying to a custom domain
echo 'katrinawang.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# deploying to https://tydlwav.github.io
git push -f git@github.com:lightbringerk/lightbringerk.github.io.git master

cd -
