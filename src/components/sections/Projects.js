import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getProjects from '../../helpers/data/projectData';
import ProjectCard from '../cards/ProjectCard';

export default function Projects({ projects, setProjects }) {
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <>
      <h1>Projects</h1>
      <div className='projects-container d-flex flex-flow'>
        {projects.map((projectInfo) => (
          <ProjectCard
            key={projectInfo.firebaseKey}
            name={projectInfo.name}
            image={projectInfo.image}
            description={projectInfo.description}
            deployedLink={projectInfo.deployedLink}
            githubLink={projectInfo.githubLink}
          />
        ))}
      </div>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired,
};
