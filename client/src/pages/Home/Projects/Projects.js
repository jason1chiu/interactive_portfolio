import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'This is project 1.', img: 'img1.jpg', link: '#' },
    { id: 2, title: 'Project 2', description: 'This is project 2.', img: 'img2.jpg', link: '#' },
    { id: 3, title: 'Project 3', description: 'This is project 3.', img: 'img3.jpg', link: '#' },
    { id: 4, title: 'Project 4', description: 'This is project 4.', img: 'img4.jpg', link: '#' },
    { id: 5, title: 'Project 5', description: 'This is project 5.', img: 'img5.jpg', link: '#' },
    { id: 6, title: 'Project 6', description: 'This is project 6.', img: 'img6.jpg', link: '#' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "60px",
    slidesToScroll: 1
  };

  return (
    <div id='projects-section' className='text-center'>
      <h1>My Projects</h1>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <img
              className="d-block w-100"
              src={project.img}
              alt={project.title}
            />
            <p>{project.description}</p>
            <Button href={project.link} variant="primary">View Project</Button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsPage;