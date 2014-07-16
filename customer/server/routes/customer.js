var express  = require('express'),
    customer = require('../data/customer'),
    router   = express.Router();

/* GET /api/customers */
router.get('/', function(req, res, next) {
    console.log('entrou');
    customer.find(function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

/* GET /api/customers/1 */
router.get('/:id', function(req, res, next) {
    customer.findById({ id: req.params.id }, function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

/* POST /api/customers */
router.post('/', function(req, res, next) {
    customer.create(req.body, function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

/* PUT /api/customers/1 */
router.put('/:id', function(req, res, next) {
    customer.update({ id: req.params.id }, req.body, function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

/* DELETE /api/customers */
router.delete('/:id', function(req, res, next) {
    customer.remove({ id: req.params.id }, function(err, result) {
        if (err) next(err);
        res.json(result);
    });
});

module.exports = router;
