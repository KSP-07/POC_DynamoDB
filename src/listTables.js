const { dynamoDb } = require('../config/db'); // Assuming dynamoDb is properly configured in this file

const params = {
  // You can optionally specify a `ExclusiveStartTableName` to paginate through the tables if you have many
  // For example, `ExclusiveStartTableName: 'table_name'` will return results starting from that table
};

dynamoDb.listTables(params, (err, data) => {
  if (err) {
    console.log("Unable to list tables:", JSON.stringify(err, null, 2));
  } else {
    console.log('Tables:', JSON.stringify(data.TableNames, null, 4));
  }
});