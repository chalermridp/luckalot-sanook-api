$StageName = $args[0]
if ($null -eq $StageName) {
    $StageName = 'dev'
}

mkdir -p artifact
npm install
npm run build
npm prune --production

$compress = @{
    Path = "dist", "node_modules"
    DestinationPath = "artifact/luckalot-sanook-api.zip"
    CompressionLevel = "Fastest"
}
Compress-Archive @compress

aws cloudformation package --template-file template.yaml --s3-bucket luckalot-sanook-api-artifact --output-template-file artifact/template.$StageName.out.yaml --profile luckalot.$StageName
aws cloudformation deploy --template-file artifact/template.$StageName.out.yaml --stack-name luckalot-sanook-api-stack --capabilities CAPABILITY_NAMED_IAM --profile luckalot.$StageName