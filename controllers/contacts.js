const Contact = require("../db/models/contacts");

// GET ALL
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts); // JSON(stringify() && Content-Type: application/json && res.send()
  } catch (error) {
    res.status(500).json({ error: "Error finding any contacts" });
  }
};

// GET ONE (byID)
const getSingleContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.json(contact); // JSON(stringigy() && Content-Type: application/json && res.send()
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error finding contact for ID ${req.params.id}` });
  }
};

// POST ONE (New Contact)
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();

    res.status(201).json(`Created new contact for ${savedContact._id}`);
  } catch (error) {
    res.status(500).json({ error: "Error - did not create new contact" });
  }
};

// PUT (UPDATE) ONE (byId)
const updateContact = async (req, res) => {
  try {
    const targetContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!targetContact) {
      return res
        .status(404)
        .json({ error: `No contact for ID ${req.params.id}` });
    }
    res
      .status(204)
      .json({ message: `Updated ID ${req.params.id}`, contact: targetContact });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Error - update did not save for ID ${req.params.id}.` });
  }
};

// DELETE ONE (byId)
const deleteContact = async (req, res) => {
  try {
    const targetContact = await Contact.findByIdAndDelete(req.params.id);

    if (!targetContact) {
      res
        .status(404)
        .json({ error: `Error - no contact for ID ${req.params.id}` });
    }

    res.status(200).json({
      message: `ID ${req.params.id} has been deleted.`,
      contact: targetContact,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: `Could not delete contact for ID ${req.params.id}` });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
