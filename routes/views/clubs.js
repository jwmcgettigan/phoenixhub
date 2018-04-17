var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'clubs';

  // Load Products
  view.query('clubs', keystone.list('Club').model.find());

  // Render View
  view.render('clubs')
}
