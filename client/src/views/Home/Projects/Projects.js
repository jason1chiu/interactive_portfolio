import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import ProjectCard from "./components/ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";
import AddProjectForm from "./components/AddProjectForm";
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
  const [showAdd, setShowAdd] = useState(false);
  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container id="projects-section">
      <Row className="justify-content-center">
        <Col md={12}>
          <h1 className="text-center subheading">Projects</h1>
          {Auth.loggedIn() && (
            <Row>
              <Col className="text-center">
                <Button
                  className="customButton"
                  variant="primary"
                  onClick={() => setShowAdd(true)}
                >
                  <MdAddCircle />
                </Button>
              </Col>
            </Row>
          )}
          <AddProjectForm show={showAdd} setShow={setShowAdd} />
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
            {(data?.getPortfolio?.projects || []).map((project) => (
              <ProjectCard project={project} key={project._id} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
