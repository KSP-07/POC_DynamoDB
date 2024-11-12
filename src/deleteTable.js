

const {dynamoDb} = require('../config/db');

const params = {
    TableName: 'Moviess' 
  };
  
  dynamoDb.deleteTable(params, (err, data) => {
    if (err) {
      console.log("Unable to delete table:", JSON.stringify(err, null, 2));
    } else {
      console.log('Table Deleted:', JSON.stringify(data, null, 4));
    }
  });