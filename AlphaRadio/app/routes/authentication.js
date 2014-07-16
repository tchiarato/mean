var Router     = require('express').Router,
    auth       = Router(),
    controller = require('../controllers/authentication');

auth.route('/')
    .post(controller.signin);

module.exports = auth;