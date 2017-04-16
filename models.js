const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema ({
	title: String,
	content: String,
	author: {
		firstName: String,
		lastName: String
	},
	created: {type: Date, default: Date.now}
})

blogSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()});

blogSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorString
  };
}

const blogPost = mongoose.model('blogPost', blogSchema);

module.exports = {blogPost};

