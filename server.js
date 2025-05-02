/* This will be only for startup, connecting the app and connecting to the DB */

require('dotenv').config();
const app = require('./app');
const initDb = require('./db/connection');

const port = process.env.PORT || 3000;

const serverStart = async () => {
    try {
        await initDb();
        console.log('The database has successfully connected');

        app.listen(port, () => {
            console.log (`Server is running on ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

serverStart();