const express = require('express');
const config = require('./config');
const router = require('./api');
const server = express();

/* router imported from ./api/index.js */
server.use('/api', router); // registers our router to our server

/* config.PORT imported from ./config/index.js */
server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});