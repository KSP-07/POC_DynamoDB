

const {docClient} = require('../config/db');


const params = {
    TableName : 'Movie',
    KeyConditionExpression : 'MovieId = :movieId and ReleaseDate between :start and :end',
    ExpressionAttributeValues : {
        ':movieId' : 'Movie#2018',
        ':start' : '2018-01-10',
        ':end' : '2024-01-01',
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