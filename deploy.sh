#!/bin/sh
StageName=$1

mkdir -p artifact
npm install
npm run build
npm prune --production
zip -r artifact/luckalot-sanook-api.zip dist/ node_modules

aws cloudformation package --template-file template.yaml --s3-bucket luckalot-sanook-api-artifact --output-template-file artifact/template.${StageName:-"dev"}.out.yaml --profile luckalot.${StageName:-"dev"}
aws cloudformation deploy --template-file artifact/template.${StageName:-"dev"}.out.yaml --stack-name luckalot-sanook-api-stack --capabilities CAPABILITY_NAMED_IAM --profile luckalot.${StageName:-"dev"}