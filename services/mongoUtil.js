var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var dbCache = {};

function connectPromise() {
    return new Promise((resolve, reject) => {
        MongoClient.connect("mongodb://localhost:27017/kreano-2021").then(db => {
            console.log("Connection with mongodb successful");
            dbCache.db = db;

            resolve();
        }).catch(err => {
            console.log("Error while connecting to Mongo DB " + err);
            dbCache = {};

            reject(error);
        });
    });
};

function getDb() {
    return dbCache.db;
}

module.exports.connectPromise = connectPromise;
module.exports.getDb = getDb;