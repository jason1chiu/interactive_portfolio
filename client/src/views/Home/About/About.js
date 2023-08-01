import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { MdAddCircle, MdEdit } from "react-icons/md";
import InformationCard from "./components/InformationCard";
import BackgroundTable from "./components/BackgroundTable";
import EducationTable from "./components/EducationTable";
import InterestsCard from "./components/InterestsCard";
import AddProfileForm from "./components/AddProfileForm";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";
import Auth from "../../../utils/auth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const About = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

  const hasData = data && data.getPortfolio.information && data.getPortfolio.background && data.getPortfolio.education && data.getPortfolio.interests;

  const avatar =
    data && data.getPortfolio.information
      ? data.getPortfolio.information.avatar
      : "https://via.placeholder.com/300";

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container id="about-section">
      <h1 className="text-center subheading">About Me</h1>
      {Auth.loggedIn() && (
        <Row>
          {!hasData ? (
            <Col className="text-center">
              <Button
                className="customButton"
                variant="primary"
                onClick={() => setShowEdit(true)}
              >
                <MdEdit />
              </Button>
            </Col>
          ) : (
            <Col className="text-center">
              <Button
                className="customButton"
                variant="primary"
                onClick={() => setShowAdd(true)}
              >
                <MdAddCircle />
              </Button>
              <AddProfileForm show={showAdd} setShow={setShowAdd} />
            </Col>
          )}
        </Row>
      )}

      <Row className="mt-4">
        <Col md={8}>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={6000}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <InformationCard />
            </div>
            <div>
              <BackgroundTable />
            </div>
            <div>
              <EducationTable />
            </div>
            <div>
              <InterestsCard />
            </div>
          </Carousel>
        </Col>

        <Col md={4} className="image-container">
          <Image
            src={avatar}
            alt="Your Description Here"
            fluid
            style={{
              borderRadius: "10%", 
              border: "2px solid black", 
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", 
              objectFit: "cover", 
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
