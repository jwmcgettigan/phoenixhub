var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'news';

  // Load Products
  view.query('news', keystone.list('Article').model.find());

  // Render View
  view.render('news')
}
