var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index');
});

router.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

module.exports = router;
