const { Schema, model } = require('mongoose');

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
});

const BlogPost = model('BlogPost', blogPostSchema);

module.exports = BlogPost;