import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateProject, createProject } from '../../helpers/data/projectData';

export default function ProjectForm({ setProjects, toggle, data }) {
  const [project, setProject] = useState({
    name: data ? data.name : '',
    image: data ? data.image : '',
    description: data ? data.description : '',
    deployedLink: data ? data.deployedLink : '',
    githubLink: data ? data.githubLink : '',
    firebaseKey: data ? data.firebaseKey : null,
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then(setProjects);
    } else {
      createProject(project).then(setProjects);
    }

    setProject({
      name: '',
      image: '',
      description: '',
      deployedLink: '',
      githubLink: '',
      firebaseKey: null,
    });

    toggle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='projectName'>Name</Label>
        <Input
          value={project.name}
          type='text'
          name='name'
          id='projectName'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='projectImg'>Image URL</Label>
        <Input
          value={project.image}
          type='url'
          name='image'
          id='projectImg'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='projectDesc'>Description</Label>
        <Input
          value={project.description}
          type='textarea'
          name='description'
          id='projectDesc'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='projectLink'>Deployed Link</Label>
        <Input
          value={project.deployedLink}
          type='url'
          name='deployedLink'
          id='projectLink'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='projectGithub'>Github Link</Label>
        <Input
          value={project.githubLink}
          type='url'
          name='githubLink'
          id='projectGithub'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

ProjectForm.propTypes = {
  setProjects: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.object,
};
