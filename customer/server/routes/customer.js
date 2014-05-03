var express  = require('express'),
    customer = require('../data/customer'),
    router   = express.Router();

/* GET /api/customers */
router.get('/', function(req, res, next) {
    customer.find(function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

router.get('/:id', function(req, res, next) {
    customer.findById({ id: req.params.id }, function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

module.exports = router;
