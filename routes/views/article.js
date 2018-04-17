var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'news';
  locals.filters = {
    article: req.params.article
  }
  locals.data = {
    news:[]
  }

  view.on('init', function(next){
    var q = keystone.list('Article').model.findOne({
      slug: locals.filters.article
    });

    q.exec(function(err, result){
      locals.data.article = result;
      next(err);
    })
  });

  // Render View
  view.render('article')
}
