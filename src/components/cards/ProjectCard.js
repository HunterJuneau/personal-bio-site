import React from 'react';
import {
  Card, CardText, CardBody, CardLink, CardTitle, CardFooter
} from 'reactstrap';
import PropTypes from 'prop-types';
import FormModal from '../FormModal';

export default function ProjectCard({ project, admin, setProjects }) {
  return (
    <div className='w-25 m-2'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>{project.name}</CardTitle>
        </CardBody>
        <img width='100%' src={project.image} alt={project.name} />
        <CardBody>
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
