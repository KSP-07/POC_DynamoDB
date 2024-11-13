



const {docClient} = require('../config/db');


const params = {
    TableName : 'Movie',
    IndexName : 'GenreIndex',
    KeyConditionExpression : 'MovieId = :movieId and Genre = :genre',
    ExpressionAttributeValues : {
        ':movieId' : 'Movie#2019',
        ':genre' : 'Comedy',
    },
};


docClient.query(params , (err , data)=>{
    if(err){
        console.log("Unable to query " , JSON.stringify(err, null , 4));
    }
    else{
        console.log("Query successful" , JSON.stringify(data ,null , 4));
    }
});