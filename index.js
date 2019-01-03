Promise = require('bluebird');
const app = require('./src/config/express');
const mongoose = require('./src/config/mongoose');
const { port, env } = require('./src/config/env-vars');

// open connection
mongoose.connect();

// listen to requests
app.listen(port, () => console.log(`server started on port ${port} (${env})`));

module.exports = app;
