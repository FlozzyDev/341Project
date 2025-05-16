const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API for managing contacts",
    version: "1.0.0",
  },
  host: "localhost:3000",
  schemes: ["http"],
  definitions: {
    Contact: {
      $firstName: "Joseph",
      $lastName: "Smith",
      $email: "jSmith@example.com",
      $favoriteColor: "red",
      $birthday: "1805-12-23",
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

const options = {
  autoBody: true,
  autoHeaders: true,
  autoQuery: true,
};

swaggerAutogen(outputFile, endpointsFiles, doc, options);
