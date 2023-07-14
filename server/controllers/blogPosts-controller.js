// import blog post model
const { BlogPost } = require("../models");

module.exports = {
  // get all blog posts
  async getBlogPosts(req, res) {
    const blogPosts = await BlogPost.find({});
    res.json(blogPosts);
  },
  // get a single blog post by id
  async getSingleBlogPost({ params }, res) {
    const blogPost = await BlogPost.findById(params.id);
    if (!blogPost) {
      return res
        .status(400)
        .json({ message: "Cannot find a blog post with this id!" });
    }
    res.json(blogPost);
  },
  // create a new blog post
  async createBlogPost({ body }, res) {
    const blogPost = await BlogPost.create(body);
    if (!blogPost) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    res.json(blogPost);
  },
  // update a blog post
  async updateBlogPost({ params, body }, res) {
    const blogPost = await BlogPost.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!blogPost) {
      return res
        .status(400)
        .json({ message: "Cannot find a blog post with this id!" });
    }
    res.json(blogPost);
  },
  // delete a blog post
  async deleteBlogPost({ params }, res) {
    const blogPost = await BlogPost.findByIdAndDelete(params.id);
    if (!blogPost) {
      return res
        .status(400)
        .json({ message: "Cannot find a blog post with this id!" });
    }
    res.json(blogPost);
  },
};
