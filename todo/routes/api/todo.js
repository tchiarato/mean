var express     = require('express');
var router      = express.Router();
var data        = require('../../data/todoData');

/* GET /api/todos */
router.get('/', function(req, res, next) {
    data.findAll(function(err, todos) {
        if (err) next(err);
        res.json(todos);
    });
});

/* DELETE /api/todos/1 */
router.delete('/:id', function(req, res, next) {
    data.delete({ id: req.params.id }, function(err, todo) {

        if (err) next(err);
        res.json(todo);
    });
});

/* POST /api/todos */
router.post('/', function(req, res, next) {
    data.create(req.body, function(err, todo) {

        if (err) next(err);
        res.json(todo);
    });
});

module.exports = router;
