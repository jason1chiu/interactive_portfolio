import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Form } from 'react-bootstrap';
import { GET_ALL_BLOGS } from '../../../utils/queries';
import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../../../utils/mutations';

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
    try {
      await addBlog({
        variables: { ...formState },
        refetchQueries: [{ query: GET_ALL_BLOGS }],
      });
      setFormState({
        title: '',
        content: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete blog post
  const handleDeleteBlog = async (blogId) => {
    try {
      await deleteBlog({
        variables: { blogId },
        refetchQueries: [{ query: GET_ALL_BLOGS }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Blog Manager</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
            name="title"
            onChange={handleInputChange}
            value={formState.title}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter blog content"
            name="content"
            onChange={handleInputChange}
            value={formState.content}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Blog
        </Button>
      </Form>
      {data.blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <Button variant="danger" onClick={() => handleDeleteBlog(blog.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default BlogManager;