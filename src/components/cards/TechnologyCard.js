import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FormModal from '../FormModal';
import { deleteTechnology } from '../../helpers/data/technologyData';

export default function TechnologyCard({ technology, admin, setTechnologies }) {
  const handleClick = () => {
    deleteTechnology(technology.firebaseKey).then(setTechnologies);
  };

  return (
    <div className='tech-card'>
      <a href={technology.link}>
        <img
          src={technology.logoUrl}
          alt={technology.name}
          className='w-100'
        ></img>
        <h3>{technology.name}</h3>
      </a>
      {admin ? (
        <div>
          <FormModal
            dataSource='Technology'
            setState={setTechnologies}
            data={technology}
          />
          <Button color='danger' onClick={handleClick}>Delete</Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

TechnologyCard.propTypes = {
  technology: PropTypes.object.isRequired,
  admin: PropTypes.bool.isRequired,
  setTechnologies: PropTypes.func.isRequired,
};
