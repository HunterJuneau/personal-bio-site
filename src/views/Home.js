import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../components/sections/Bio';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';

export default function Home({
  technologies, setTechnologies, projects, setProjects
}) {
  return (
    <>
      <Bio />
      <Technologies
        technologies={technologies}
        setTechnologies={setTechnologies}
      />
      <Projects projects={projects} setProjects={setProjects} />
    </>
  );
}

Home.propTypes = {
  technologies: PropTypes.array.isRequired,
  setTechnologies: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};
