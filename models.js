const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
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