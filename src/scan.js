

const {docClient} = require('../config/db');


const params = {
    TableName : "Movie"
};


docClient.scan(params, (err, data)=>{
    if(err){
        console.log("Error occured while scanning : ", JSON.stringify(err, null , 3));
    }
    else{
        console.log("Scanning completed : ", JSON.stringify(data , null , 2));
    }
})