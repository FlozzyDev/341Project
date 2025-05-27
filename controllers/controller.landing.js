const welcomeFunction = (req, res, next) => {
  try {
    res.json(
      "Welcome to my API! Type /contacts for all contacts, or /contacts/{id} with the ID for a specific one!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { welcomeFunction };
