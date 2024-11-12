

const {docClient} = require('../config/db');


const params = {
    TableName: 'Movie',
    Key: {MovieId : 'Movie#2018' , ReleaseDate : '2018-01-10'},
    UpdateExpression : 'set Description = :des',
    ExpressionAttributeValues : {':des':'Updated movie expression'},
    ReturnValues: 'UPDATED_NEW'
};


docClient.update(params , (err , data)=>{
    if(err){
        console.log("Unable to update item " , JSON.stringify(err , null , 3));
    }
    else{
        console.log("Update Succeeded: " , JSON.stringify(data , null , 2));
    }
});

