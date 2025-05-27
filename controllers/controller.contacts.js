const Contact = require("../db/db.models/models.contacts");

// GET ALL
const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

// GET ONE (byID)
const getSingleContact = async (req, res, next) => {
  const id = req.params.id;
  try {
    const contact = await Contact.findById(id);
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

// POST ONE (New Contact)
const createContact = async (req, res, next) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(`Created new contact for ${savedContact._id}`);
  } catch (error) {
    next(error);
  }
};

// PUT (UPDATE) ONE (byId)
const updateContact = async (req, res, next) => {
  const id = req.params.id;
  try {
    const targetContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: `Updated ID ${id}`, contact: targetContact });
  } catch (error) {
    next(error);
  }
};

// DELETE ONE (byId)
const deleteContact = async (req, res, next) => {
  const id = req.params.id;
  try {
    const targetContact = await Contact.findByIdAndDelete(id);
    res.status(200).json({
      message: `ID ${id} has been deleted.`,
      contact: targetContact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
};
