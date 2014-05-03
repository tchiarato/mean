var express = require('express'),
    router  = express.Router();

/* GET / */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET /partials/listUsers */
router.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});

module.exports = router;
