var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://movie:movie@cluster0-shard-00-00.c4sms.mongodb.net:27017,cluster0-shard-00-01.c4sms.mongodb.net:27017,cluster0-shard-00-02.c4sms.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3al5ka-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
