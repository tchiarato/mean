var express = require('express'),
    router  = express.Router();

/* GET / */
router.get('/', function(req, res) {
  res.render('partials/index', { title: 'Express' });
});

/* GET /partials/path */
router.get('/partials/*', function(req, res) {
    res.render('partials/' + req.params[0]);
});

module.exports = router;
