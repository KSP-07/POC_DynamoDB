

    const {docClient} = require('../config/db');
async function queryCursor(){

    const params = {
        TableName : "Movie",
        KeyConditionExpression : 'MovieId = :movieId',
        ExpressionAttributeValues : {':movieId' : 'Movie#2018'},
        Limit : 2
    };
    
    
    let data;
    
    do {
        try {
            data = await docClient.query(params).promise();
            if (data.Items && data.Items.length > 0) {
                console.log("Limited Data:", data.Items);
            } else {
                console.log("No items found for the specified MovieId.");
            }
            params.ExclusiveStartKey = data.LastEvaluatedKey;
        } catch (err) {
            console.log("Error querying data:", err);
        }
    } while (data && data.LastEvaluatedKey);
}



queryCursor();