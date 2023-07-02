const express = require('express');
const config = require('./config');
const cors = require('cors');
const router = require('./api');
const server = express();
const mongoose = require('mongoose');

/* cors is needed to allow our client to talk to our server */
server.use(cors());

/* allow express to be able to process our input */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/* router imported from ./api/index.js */
server.use('/api', router); // registers our router to our server

/* allow us to connect to our MongoDB database */
mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
        console.log('Connected to MongoDB database');
    });


/* allow us to start server locally */
server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});