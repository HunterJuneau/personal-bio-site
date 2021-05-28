import React from 'react';
import {
  Card, CardText, CardBody, CardLink, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function ProjectCard({
  name,
  image,
  description,
  deployedLink,
  githubLink,
}) {
  return (
    <div className='w-25 m-2'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>{name}</CardTitle>
        </CardBody>
        <img width='100%' src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
          <CardLink href={deployedLink}>Visit</CardLink>
          <CardLink href={githubLink}>Github</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};
