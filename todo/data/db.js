var mongoose    = require('mongoose');
var config      = require('../config/config')

mongoose.connect(config.db);

var db = mongoose.connection;
db.on('open', function() {
    console.log('connected to mongodb');
});
db.on('error', function() {
    console.log('error connecting to mongodb');
});

module.exports = mongoose;