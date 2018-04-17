var keystone = require('keystone');
var Types = keystone.Field.Types;

var Club = new keystone.List('Club', {
  map: {name: 'title'},
  singular:'Club',
  plural:'Clubs',
  autokey:{path: 'slug', from: 'title', unique: true}
});

Club.add({
  title: {type: String, required: true},
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  description: { type: Types.Html, wysiwyg: true, height: 200 },
  image: {type: Types.CloudinaryImage},
  dateFounded: { type: Types.Date, index: true, default: Types.Date.now }
});

Club.register();
