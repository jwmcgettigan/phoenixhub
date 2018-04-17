var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'clubs';
  locals.filters = {
    club: req.params.club
  }
  locals.data = {
    clubs:[]
  }

  view.on('init', function(next){
    var q = keystone.list('Club').model.findOne({
      slug: locals.filters.club
    });

    q.exec(function(err, result){
      locals.data.club = result;
      next(err);
    })
  });

  // Render View
  view.render('club')
}
