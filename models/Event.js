var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Article Model
 * ==========
 */

//'Event' is a reserved word in javascript, so I added a _ to the end
var Event_ = new keystone.List('Event_', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Event_.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	eventDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Event_.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Event_.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Event_.register();
