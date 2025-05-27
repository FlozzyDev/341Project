/* This file is for all routes specific to the users collection */

const routes = require("express").Router();
const contactsController = require("../controllers/controller.contacts");
const {
  validateContactCreate,
  validateIdExists,
  validateContactUpdate,
} = require("../middleware/mw.validation/validation.contacts");

routes.get("/", contactsController.getAllContacts);
routes.get("/:id", validateIdExists, contactsController.getSingleContact);
routes.post("/", validateContactCreate, contactsController.createContact);
routes.put(
  "/:id",
  validateIdExists,
  validateContactUpdate,
  contactsController.updateContact
);
routes.delete("/:id", validateIdExists, contactsController.deleteContact);

module.exports = routes;
