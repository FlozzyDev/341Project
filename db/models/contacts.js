const mongoose = require('mongoose');

/* Just creating this to learn a bit more about how mongoose works. */ 

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact; 

