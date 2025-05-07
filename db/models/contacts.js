const mongoose = require("mongoose");

/* Just creating this to learn a bit more about how mongoose works. */

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteColor: { type: String, required: true },
    birthday: { type: String, required: true },
  },
  { versionKey: false } // adding this to stop __v from populating, I don't want to worry about it for now. (mongoose specific version tracking)
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
