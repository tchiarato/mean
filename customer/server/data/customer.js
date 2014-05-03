var mongoose = require('../data/connection');
var Customer = require('../models/Customer')(mongoose);

exports.find = function(callback) {
    Customer.find(callback);
}

exports.findById = function(customer, callback) {
    Customer.find({ _id: customer.id}, callback);
}
