Week 06 - Updating for the team project since we are adding data validation and better error handling.

## Data Validation

We technically had some of this already as we relied on Mongoose and the schema to validate, but it's probably better to make sure we keep logic in the app and not depend on over complicating the DB (I have nightmares from work).

We added joi and defined a contact schema for validation in validationSchema > valSchema.contact.js. We have one function for new contacts, and one for updates. I also added 2 smaller ones to: - verify if an email exists already (Create New) && verify if the body is not empty

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
email: Joi.string().min(1).max(100).optional(),
favoriteColor: Joi.string().min(1).max(100).optional(),
birthday: Joi.string().min(1).max(100).optional(),
});

## Error Handling

Since this is such a simple API, I'm not going to go overboard with adding too much.

We added a very simple error handler that will catch whatever leftover errors are left over after validation processes. We do this by passing in whatever error using next(error) at the end of controllers.

## Process

Request comes in and is first passed through validation in the routes.
Middleware > mw.validation > validation.contact.js
If it passes these, it will continue to the controller. If there is an error here..
It is passed to the middleware/mw.errorHandler.
