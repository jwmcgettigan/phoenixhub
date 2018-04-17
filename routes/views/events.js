var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'events';

  // Load Products
  view.query('events', keystone.list('Event_').model.find());

  // Render View
  view.render('events')
}
