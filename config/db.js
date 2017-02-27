// Maybe add more config files and add them in server.js
var mongoose = require('mongoose');

var dbURL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : process.env.DB_URL_DEV;

module.exports = mongoose.connect(dbURL);
