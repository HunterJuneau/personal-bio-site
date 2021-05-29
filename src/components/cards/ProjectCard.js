import React from 'react';
import {
  Card, CardText, CardBody, CardLink, CardTitle, CardFooter, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectData';
import FormModal from '../FormModal';

export default function ProjectCard({ project, admin, setProjects }) {
  const handleClick = () => {
    deleteProject(project.firebaseKey).then(setProjects);
  };

  return (
    <div className='m-2 project-card'>
      <Card>
        <CardBody>
          <CardTitle tag='h5' className='text-center'>{project.name}</CardTitle>
        </CardBody>
        <img width='100%' src={project.image} alt={project.name} />
        <CardBody className='text-center'>
          <CardText>{project.description}</CardText>
          <CardLink href={project.deployedLink}>Visit</CardLink>
          <CardLink href={project.githubLink}>Github</CardLink>
        </CardBody>
        {admin ? (
          <CardFooter>
            <FormModal
              dataSource='Project'
              setState={setProjects}
              data={project}
            />
            <Button color='danger' onClick={handleClick}>Delete</Button>
          </CardFooter>
        ) : (
          ''
        )}
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  admin: PropTypes.bool.isRequired,
  setProjects: PropTypes.func.isRequired,
};
