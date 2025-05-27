const Joi = require("joi");

const contactSchemaCreate = Joi.object({
  firstName: Joi.string().min(1).max(100).required(),
  lastName: Joi.string().min(1).max(100).required(),
  email: Joi.string().email().required(),
  favoriteColor: Joi.string().min(1).max(100).required(),
  birthday: Joi.string().min(1).max(100).required(),
});

const contactSchemaUpdate = Joi.object({
  firstName: Joi.string().min(1).max(100).optional(),
  lastName: Joi.string().min(1).max(100).optional(),
  email: Joi.string().email().optional(),
  favoriteColor: Joi.string().min(1).max(100).optional(),
  birthday: Joi.string().min(1).max(100).optional(),
});

module.exports = { contactSchemaCreate, contactSchemaUpdate };
