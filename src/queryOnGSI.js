

const {docClient} = require('../config/db');

const params = {
    TableName : 'Movie',
    IndexName : 'RatingIndex',
    KeyConditionExpression: 'Rating = :rating',
    ExpressionAttributeValues : {
        ':rating' : "8.5"
    }
};


docClient.query(params, (err , data)=>{
    if(err){
        console.log("Unable to query " , JSON.stringify(err, null , 4));
    }
    else{
        console.log("Query successful" , JSON.stringify(data ,null , 4));
    }
})