const clientsDao = require('../daos/clientsDao');

async function getAllProducts() {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await clientsDao.getAll();
            resolve(response);
        } catch (err) {
            //error log
            reject(err);
        }
    });
}

module.exports.getAllProducts = getAllProducts;