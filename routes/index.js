var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Express' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('pages/news', { title: 'Express' });
});

/* GET events page. */
router.get('/events', function(req, res, next) {
  res.render('pages/events', { title: 'Express' });
});

/* GET clubs page. */
router.get('/clubs', function(req, res, next) {
  res.render('pages/clubs', { title: 'Express' });
});

module.exports = router;
