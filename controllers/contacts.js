const Contact = require("../db/models/contacts");

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts); // JSON(stringify() && Content-Type: application/json && res.send() 
    } catch (error) {
        res.status(500).json({error: 'Error finding contacts'});
    }
};

const getSingleContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({error: 'Contact not found'});
        }
        res.json(contact); // JSON(stringigy() && Content-Type: application/json && res.send() 
    } catch (error) {
        res.status(500).json({error: 'Error finding contacts'});
    }
}

module.exports = { getAllContacts, getSingleContact };