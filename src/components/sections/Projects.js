import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../../helpers/data/projectData';
import FormModal from '../FormModal';
import ProjectCard from '../cards/ProjectCard';

export default function Projects({ admin }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className='my-5'>
      <h1 className='text-center'>Projects</h1>
      {admin ? <FormModal dataSource='Project' setState={setProjects} /> : ''}
      <div className='projects-container d-flex flex-flow justify-content-center'>
        {projects.map((projectInfo) => (
          <ProjectCard
            key={projectInfo.firebaseKey}
            project={projectInfo}
            admin={admin}
            setProjects={setProjects}
          />
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  admin: PropTypes.bool.isRequired,
};
