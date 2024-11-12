

const {dynamoDb}  = require('../config/db');

const params = {
    TableName : 'Movie',
    KeySchema : [
        {AttributeName : 'MovieId' , KeyType : 'HASH'},
        {AttributeName : 'ReleaseDate' , KeyType : 'RANGE'}
    ],
    AttributeDefinitions:[
        {AttributeName : 'MovieId', AttributeType : 'S'},
        {AttributeName : 'ReleaseDate' , AttributeType : 'S'},
        {AttributeName : 'Genre' , AttributeType : 'S'},
        {AttributeName : 'Rating' , AttributeType : 'S'},
        // {AttributeName : 'MovieName' , AttributeType : 'S'}  //dynamoDB gives error if i inculde it bcoz here it only need attributes that are used as PK SK for table or GSI LSI
    ],
    ProvisionedThroughput : {ReadCapacityUnits : 5 , WriteCapacityUnits : 5},
    LocalSecondaryIndexes :[
        {
            IndexName : 'GenreIndex',
            KeySchema : [
                {AttributeName : 'MovieId' , KeyType : 'HASH'},
                {AttributeName : 'Genre' , KeyType : 'RANGE'},
            ],
            Projection : {ProjectionType : 'ALL'}
        }
    ],
    GlobalSecondaryIndexes :[
        {
            IndexName : 'RatingIndex',
            KeySchema : [
                {AttributeName : 'Rating' , KeyType : 'HASH'},
            ],
            Projection : {ProjectionType : 'ALL'},
            ProvisionedThroughput : {ReadCapacityUnits : 5 , WriteCapacityUnits : 5}
        }
    ]
};


dynamoDb.createTable(params , (err ,data)=>{
    if(err) {
        console.log("Unable to create table " , (err));
    }
    else{
        console.log('Table Created : ' , JSON.stringify(data , null , 4));
    }
});