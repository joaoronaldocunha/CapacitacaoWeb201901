const express = require('express');

const routes = express.Router();

routes.use("/", require('./info'));
routes.use("/tasks", require('./tasks'));

module.exports = routes;