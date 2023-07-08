import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Form } from 'react-bootstrap';
import { GET_ME } from '../../utils/queries';
import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../../utils/mutations';

function ProjectManager() {
  const { loading, error, data } = useQuery(GET_ME);
  const [addProject] = useMutation(ADD_PROJECT);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  // State for form inputs
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    technologies: '',
    link: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submit to add a new project
  const handleAddProjectSubmit = async (event) => {
    event.preventDefault();
    try {
      await addProject({
        variables: { ...formState },
        refetchQueries: [{ query: GET_ME }],
      });
      setFormState({
        title: '',
        description: '',
        technologies: '',
        link: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle form submit to update a project
  const handleUpdateProjectSubmit = async (event, projectId) => {
    event.preventDefault();
    try {
      await updateProject({
        variables: { ...formState, projectId },
        refetchQueries: [{ query: GET_ME }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Handle delete project
  const handleDeleteProject = async (projectId) => {
    try {
      await deleteProject({
        variables: { projectId },
        refetchQueries: [{ query: GET_ME }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Manage Projects</h1>
      <Form onSubmit={handleAddProjectSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project title"
            name="title"
            onChange={handleInputChange}
            value={formState.title}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project description"
            name="description"
            onChange={handleInputChange}
            value={formState.description}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Technologies</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter technologies used"
            name="technologies"
            onChange={handleInputChange}
            value={formState.technologies}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter project link"
            name="link"
            onChange={handleInputChange}
            value={formState.link}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Project
        </Button>
      </Form>
      {data.me.projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
          <p>{project.link}</p>
          <Button variant="primary" onClick={() => handleUpdateProjectSubmit(project._id)}>
            Update Project
          </Button>
          <Button variant="danger" onClick={() => handleDeleteProject(project._id)}>
            Delete Project
          </Button>
        </div>
      ))}
    </div>
  );
}

export default ProjectManager;