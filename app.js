/* The actual app and middleware placed here */

const express = require("express");
const errorHandler = require("./middleware/mw.errorHandler");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "https://three41project-f9tj.onrender.com",
      "https://cse341-contacts-frontend.netlify.app",
      "http://localhost:3000",
    ],
  })
);
app.use(express.json());

app.use("/", require("./routes/routes.index"));

app.use(errorHandler);

module.exports = app;
