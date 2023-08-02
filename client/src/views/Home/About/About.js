import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import InformationCard from "./components/InformationCard";
import BackgroundTable from "./components/BackgroundTable";
import EducationTable from "./components/EducationTable";
import InterestsCard from "./components/InterestsCard";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";
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
  const { loading, data, refetch } = useQuery(GET_PORTFOLIO);

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

      <Row className="my-3">
        <Col
          md={12}
          className="image-container my-3 d-flex justify-content-center align-items-center"
        >
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
        <Col md={12}>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={4500}
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
      </Row>
    </Container>
  );
};

export default About;
