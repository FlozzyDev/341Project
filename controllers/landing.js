const welcomeFunction = (req, res, next) => {
    res.json('Welcome to my API! Type /contacts for all contacts, or /contacts/{id} with the ID for a specific one!');
};

module.exports = { welcomeFunction };