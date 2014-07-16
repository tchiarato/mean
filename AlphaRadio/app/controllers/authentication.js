require('../models/User');

var jwt      = require('jsonwebtoken'),
    config   = require('../../config/config'),
    mongoose = require('mongoose'),
    User     = mongoose.model('User');

exports.signin = function(req, res) {

    var email    = req.body.email || '';
    var password = req.body.password || '';
 
    if (email == '' || password == '') {
        console.log(email);
        console.log(password);
        return res.send(401);
    }
 
    User.findOne({email: email}, function (err, user) {
        if (err) {
            console.log(err);
            return res.send(401);
        }
 
        user.comparePassword(password, function(isMatch) {
            if (!isMatch) {
                return res.send(401);
            }
 
            var token = jwt.sign(user, config.secretToken, { expiresInMinutes: 60*5 });
 
            return res.json({token:token, name: user.email});
        });
    });
}