const express = require("express");
const router = express.Router();
const authService = require('../services/authService');
const clientsService = require('../services/clientsService');

router.get('/', authService.checkAuthorizedUser, async function (req, res) {
    try {
        const response = await clientsService.getAllProducts();
        res.status(200).send(response);

    } catch (err) {
        //log error and return;
        res.send(err);
    }
});

module.exports = router;