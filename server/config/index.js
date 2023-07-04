const dotenv = require('dotenv');

// this function loads all .env variables into this application
dotenv.config();

const config = {
    PORT: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    rng_url: process.env.RNG_URL,
};

module.exports = config; // to be imported in /server/index.js