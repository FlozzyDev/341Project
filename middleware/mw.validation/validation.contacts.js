const mongoose = require("mongoose");
const Contact = require("../../db/db.models/models.contacts");
const {
  contactSchemaCreate,
  contactSchemaUpdate,
} = require("../../validationSchema/valSchema.contacts");

// body checker
const validateReqBody = (req, res) => {
  if (!req.body) {
    res.status(400).json({
      success: false,
      message: "Request body is required",
    });
    return false;
  }
  return true;
};

const validateEmailExists = async (req, res) => {
  const email = req.body.email;
  const existingContact = await Contact.findOne({ email });
  if (existingContact) {
    const existingId = existingContact.id;
    return res.status(409).json({
      success: false,
      message: `Email already exists under User ${existingId}`,
    });
  }
  return true;
};

const validateContactCreate = async (req, res, next) => {
  if (!validateReqBody(req, res)) {
    return; // if body is empty
  }
  const emailCheck = await validateEmailExists(req, res);
  if (!emailCheck) return;

  const validationResult = contactSchemaCreate.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details[0].message,
    });
  }
  next();
};

const validateContactUpdate = (req, res, next) => {
  if (!validateReqBody(req, res)) {
    return; // if body is empty
  }
  const validationResult = contactSchemaUpdate.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details[0].message,
    });
  }
  next();
};

const validateIdExists = async (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid ID",
    });
  }
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Could not find contact",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error finding contact",
    });
  }
};

module.exports = {
  validateContactCreate,
  validateContactUpdate,
  validateIdExists,
};
