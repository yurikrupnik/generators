#! /bin/bash


npx lerna publish patch --no-push --yes --conventional-commits
npx lerna exec --stream --since -- npm i
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git diff --quiet && git diff --staged --quiet || git commit -am "package-lock.json update"
git push origin --follow-tags
