var mongoose = require('../data/connection');
var Customer = require('../models/Customer')(mongoose);

exports.find = function(callback) {
    Customer.find(callback);
}

exports.findById = function(customer, callback) {
    Customer.find({ _id: customer.id}, callback);
}

exports.create = function(customer, callback) {
    var model = new Customer();

    model.contactName = customer.contactName;
    model.phone = customer.phone;
    model.save(callback);
}

exports.update = function(customer, model, callback) {
    delete model._id;
    Customer.update({ _id: customer.id }, model, callback);
}

exports.remove = function(customer, callback) {
    Customer.remove({ _id: customer.id }, callback);
}
