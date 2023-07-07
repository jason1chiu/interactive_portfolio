import React from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard';

const ProjectsPage = () => {
  // Replace this with your actual projects
  const projects = [
    { title: 'Project 1', description: 'This is project 1.' },
    { title: 'Project 2', description: 'This is project 2.' },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map(project => <ProjectCard project={project} />)}
    </div>
  );
};

export default ProjectsPage;