var _ = require('underscore');

// Load app configuration

module.exports = _.extend(
    require(__dirname + '/env/' + (process.env.NODE_ENV || 'development') + '.json') || {});