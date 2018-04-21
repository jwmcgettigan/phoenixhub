var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Club Model
 * ==========
 */

var Club = new keystone.List('Club', {
  map: {name: 'title'},
  singular:'Club',
  plural:'Clubs',
  autokey:{path: 'slug', from: 'title', unique: true}
});

Club.add({
  title: {type: String, required: true},
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
  description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  banner: {type: Types.CloudinaryImage},
  logo: {type: Types.CloudinaryImage},
  dateFounded: { type: Types.Date, index: true, default: Types.Date.now, dependsOn: { state: 'published' } }
});

Club.register();
