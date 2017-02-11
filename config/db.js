// Maybe add more config files and add them in server.js
var mongoose = require('mongoose');

module.exports = {
  url: 'mongodb://tritiatimmins:Harley*8@ds019658.mlab.com:19658/biketrader'
};

var dbURL = process.env.NODE_ENV === 'production' ? process.env.DB_URL : process.env.DB_URL_DEV;

module.exports = mongoose.connect(dbURL);
