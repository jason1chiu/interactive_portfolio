import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Auth from "../../../utils/auth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is project 1.",
      img: "img1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is project 2.",
      img: "img2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is project 3.",
      img: "img3.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is project 4.",
      img: "img4.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is project 5.",
      img: "img5.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Project 6",
      description: "This is project 6.",
      img: "img6.jpg",
      link: "#",
    },
  ];

  return (
    <Container id="projects-section">
      <Row className="justify-content-center">
        <Col md={12}>
          <h1 className="text-center subheading">My Projects</h1>
          {Auth.loggedIn() && (
            <Row>
              <Col className="text-center">
                <Button className="customButton" variant="primary">
                  <MdAddCircle />
                </Button>
              </Col>
            </Row>
          )}
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={6000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
