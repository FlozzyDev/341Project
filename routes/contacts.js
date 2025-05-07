/* This file is for all routes specific to the users collection */

const routes = require("express").Router();
const contactsController = require("../controllers/contacts");

routes.get("/", contactsController.getAllContacts);
routes.get("/:id", contactsController.getSingleContact);
routes.post("/", contactsController.createContact);
routes.put("/:id", contactsController.updateContact);
routes.delete("/:id", contactsController.deleteContact);

module.exports = routes;
