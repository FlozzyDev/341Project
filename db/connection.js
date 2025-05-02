/* I want a separate file for only the connection of the DB */ 

require('dotenv').config();
const mongoose = require('mongoose');

const initDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database located')
    } catch (error)
    {
        console.log('Error finding DB:', error.message);
    }
}

module.exports = initDb;

