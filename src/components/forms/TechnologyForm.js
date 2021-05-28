import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import {
  updateTechnology,
  createTechnology,
} from '../../helpers/data/technologyData';

export default function TechnologyForm({ setTechnologies, toggle, data }) {
  const [technology, setTechnology] = useState({
    name: data ? data.name : '',
    logoUrl: data ? data.logoUrl : '',
    link: data ? data.link : '',
    firebaseKey: data ? data.firebaseKey : null,
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (technology.firebaseKey) {
      updateTechnology(technology).then(setTechnologies);
    } else {
      createTechnology(technology).then(setTechnologies);
    }

    setTechnology({
      name: '',
      logoUrl: '',
      link: '',
      firebaseKey: null,
    });

    toggle();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='technologyName'>Name</Label>
        <Input
          value={technology.name}
          type='text'
          name='name'
          id='technologyName'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='technologyLogo'>Logo URL</Label>
        <Input
          value={technology.logoUrl}
          type='url'
          name='logoUrl'
          id='technologyLogo'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='technologyLink'>Link</Label>
        <Input
          value={technology.link}
          type='text'
          name='link'
          id='technologyLink'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
}

TechnologyForm.propTypes = {
  setTechnologies: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.object,
};
