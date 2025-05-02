/* A landing route for when a user goes to root */ 

const routes = require('express').Router();
const indexController = require('../controllers/landing');

routes.get('/', indexController.welcomeFunction);

module.exports = routes;