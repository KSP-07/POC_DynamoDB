
const AWS = require('aws-sdk');

AWS.config.update({
    region : 'localdb',
    accessKeyId : 'localAccessId',
    secretAccessId : 'localSecret',
    endpoint : 'http://localhost:8000'
});

const dynamoDb = new AWS.DynamoDB();

const docClient = new AWS.DynamoDB.DocumentClient();


module.exports = {dynamoDb , docClient};
