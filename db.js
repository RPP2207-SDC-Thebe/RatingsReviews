const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect('mongodb://localhost:27017/sdc')
      .then((client) => {
        dbConnection = client.db()
        return callback();
      })
      .catch(err => {
        console.log(err);
        return callback(error);
      })
  },
  getDb: () => dbConnection
}