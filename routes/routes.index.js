/* index will be the single point of entry for all routes */
const routes = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocument));

routes.use("/", require("./routes.landing")); // landing 'page'
routes.use("/contacts", require("./routes.contacts")); // any contact related requests

module.exports = routes;
