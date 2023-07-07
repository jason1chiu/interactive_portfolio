import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_BLOGS } from '../../utils/queries';
import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../../utils/mutations';

function BlogManager() {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
  const [addBlog] = useMutation(ADD_BLOG);
  const [updateBlog] = useMutation(UPDATE_BLOG);
  const [deleteBlog] = useMutation(DELETE_BLOG);

  // State for form inputs
  const [formState, setFormState] = useState({
    title: '',
    content: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Add or update blog post here
  };

  // Handle delete blog post
  const handleDeleteBlog = async (blogId) => {
    // Delete blog post here
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Blog Manager</h1>

      {/* Form for adding/updating blog posts */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formState.content}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* List of existing blog posts */}
      {data.blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogManager;