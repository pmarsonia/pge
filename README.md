# Serverless
npm install -g serverless

# how to run in local
serverless invoke local --stage dev --aws-profile pradip-pge-gmail -f pgeLBFirstFunction

# how to deploy
serverless deploy --stage dev --aws-profile pradip-pge-gmail

# serverless offline
1. Add the following to your serverless.yml:
    plugins:
    - serverless-offline
2. Start the service by running the following command:
    serverless offline

3. Running the following curl command should trigger your function.
    curl "http://localhost:3000/dev/uploadcsv"
