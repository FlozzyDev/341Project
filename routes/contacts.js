/* This file is for all routes specific to the users collection */

const routes = require('express').Router();
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getAllContacts);
routes.get('/:id', contactsController.getSingleContact);

module.exports = routes;