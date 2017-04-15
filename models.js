var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema ({
	"title": String,
	"content" : String,
	"author": {
		"firstName": String,
		"lastName": String
	},
	created: {type: Date, default: Date.now}
})

const blogPost = mongoose.model('blogPost', blogSchema);

module.exports = {blogPost};