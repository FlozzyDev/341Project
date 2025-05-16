/* The actual app and middleware placed here */

const express = require("express");
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
app.use(express.json()); // parse incoming JSON

app.use("/", require("./routes/index"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "There was an error" });
});

module.exports = app;
