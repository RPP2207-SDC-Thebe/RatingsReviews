const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect('mongodb://mongo:27017/sdc')
      .then((client) => {
        dbConnection = client.db()
        console.log('Connected to DB');
        return callback();
      })
      .catch(err => {
        console.log(err);
        return callback(err);
      })
  },
  getDb: () => dbConnection
}