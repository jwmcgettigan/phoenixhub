var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'events';
  locals.filters = {
    'event': req.params.event
  }
  locals.data = {
    events:[]
  }

  view.on('init', function(next){
    var q = keystone.list('Event_').model.findOne({
      slug: locals.filters.event
    });

    q.exec(function(err, result){
      locals.data.event = result;
      next(err);
    })
  });

  // Render View
  view.render('event')
}
