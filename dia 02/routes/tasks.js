const express = require('express');
const tasksController = require('../controllers/tasks.controller');

const routes = express.Router();

routes.get("/", tasksController.get);
routes.post("/", tasksController.create);
routes.put("/", tasksController.update);
routes.delete("/", tasksController.remove);

module.exports = routes;