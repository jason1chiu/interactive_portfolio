import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BlogPostCard = ({ post }) => {
  return (
    <Card className='col-12 col-md-6 d-flex justify-content-center align-items-center' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.summary}</Card.Text>
        <Button variant="primary" href={post.link} target="_blank">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogPostCard;