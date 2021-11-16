const express = require('express');
const bodyParser = require('body-parser');
const mongoDbUtil = require('./services/mongoUtil');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

const clients = require('./routes/clients');
app.use('/clients', clients);

mongoDbUtil.connectPromise();

module.exports = app;
