const express = require('express');
const config = require('./config');
const cors = require('cors');
const router = require('./api');
const server = express();

/* cors is needed to allow our client to talk to our server */
server.use(cors());

/* allow express to be able to process our input */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/* router imported from ./api/index.js */
server.use('/api', router); // registers our router to our server

/* config.PORT imported from ./config/index.js */
server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});