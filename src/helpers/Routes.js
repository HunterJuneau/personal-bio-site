import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';

export default function Routes({
  technologies,
  setTechnologies,
  projects,
  setProjects,
}) {
  return (
    <Switch>
      <Route
        path='/'
        component={() => (
          <Home
            technologies={technologies}
            setTechnologies={setTechnologies}
            projects={projects}
            setProjects={setProjects}
          />
        )}
      />
    </Switch>
  );
}

Routes.propTypes = {
  technologies: PropTypes.array.isRequired,
  setTechnologies: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};
