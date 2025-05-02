/* index will be the single point of entry for all routes */ 
const routes = require('express').Router();

routes.use('/', require('./landing')); // landing 'page' 
routes.use('/contacts', require('./contacts')); // any contact related requests

module.exports = routes;