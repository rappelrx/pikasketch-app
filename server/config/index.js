const dotenv = require('dotenv');

// this function loads all .env variables into this application
dotenv.config();

const config = {
    PORT: process.env.PORT,
}

module.exports = config; // to be imported in /server/index.js