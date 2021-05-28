import React from 'react';
import {
  Card, CardText, CardBody, CardLink, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function ProjectCard({ project }) {
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
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
