const mongodb = require('../services/mongoUtil');

function getAll() {
    return new Promise((resolve, reject) => {
        var db = mongodb.getDb();
        const coll = db.collection(this.getCollectionName());
        coll.find({}).toArray().then(result => {
            resolve(result);
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = function BaseDao(collectionName) {
    return {
        getAll: getAll,
        getCollectionName: function () {
            return collectionName;
        }
    };
};