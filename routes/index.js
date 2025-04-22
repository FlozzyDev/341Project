const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomeFunction);
routes.get('/favoriteToy', myController.favoriteToy);


module.exports = routes;