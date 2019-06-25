const express = require('express');

const routes = express.Router();

routes.use("/", require('./info'));

module.exports = routes;