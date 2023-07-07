import React from 'react';
import BlogPostCard from '../../components/BlogPostCard/BlogPostCard';

const Blog = () => {
  // Replace this with your actual blog posts
  const blogPosts = [
    { title: 'Blog Post 1', content: 'This is blog post 1.' },
    { title: 'Blog Post 2', content: 'This is blog post 2.' },
  ];

  return (
    <div className='col-12 d-flex justify-content-center align-items-center'>
      <h1 className='col-12 d-flex justify-content-center align-items-center'>My Blog</h1>
      {blogPosts.map(post => <BlogPostCard post={post} />)}
    </div>
  );
};

export default Blog;