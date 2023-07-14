import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogPostCard from "../../components/BlogPostCard/BlogPostCard";

const Blog = () => {
  // Replace this with your actual blog posts
  const blogPosts = [
    { id: 1, title: "Blog Post 1", content: "This is blog post 1." },
    { id: 2, title: "Blog Post 2", content: "This is blog post 2." },
    { id: 3, title: "Blog Post 3", content: "This is blog post 3." },
    { id: 4, title: "Blog Post 4", content: "This is blog post 4." },
  ];

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <h1>My Blog</h1>
      </Row>
      <Row>
        {blogPosts.map((post, index) => (
          <Col
            xs={12}
            md={4}
            key={post.id}
            className={index >= 3 ? "mt-5" : ""}
          >
            <BlogPostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
