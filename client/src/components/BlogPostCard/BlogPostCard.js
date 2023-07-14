import React from "react";
import { Card, Button } from "react-bootstrap";

const BlogPostCard = ({ post }) => {
  return (
    <Card className="my-3 shadow" style={{ maxWidth: "600px" }}>
      <Card.Img
        variant="top"
        src={post.image || "https://via.placeholder.com/500"}
        alt={post.title}
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.summary}</Card.Text>
        <Button variant="primary" href={post.link} target="_blank">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogPostCard;
