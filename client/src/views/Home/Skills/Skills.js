import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SkillBadge from "./components/SkillBadge";
import AddSkillForm from "./components/AddSkillForm";
import Auth from "../../../utils/auth";
import { MdAddCircle } from "react-icons/md";
import { useQuery } from "@apollo/client";
import { GET_PORTFOLIO } from "../../../utils/queries";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};

const Skills = () => {
  const [showAdd, setShowAdd] = useState(false);

  const { loading, data } = useQuery(GET_PORTFOLIO);

  if (loading) {
    return <div>Loading...</div>;
  }

  const skills = data?.getPortfolio?.skills || [];

  return (
    <Container id="skills-section" className="text-center">
      <h1 className="subheading">Skills and Technologies Used</h1>
      {Auth.loggedIn() && (
        <div className="text-center">
          <Button
            className="customButton"
            variant="primary"
            onClick={() => setShowAdd(true)}
          >
            <MdAddCircle />
          </Button>
          <AddSkillForm show={showAdd} setShow={setShowAdd} />
        </div>
      )}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {skills.map((skill) => (
          <div key={skill._id} className="m-3">
            <SkillBadge skill={skill} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Skills;
