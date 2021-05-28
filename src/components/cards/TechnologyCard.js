import React from 'react';
import PropTypes from 'prop-types';

export default function TechnologyCard({ technology }) {
  return (
    <div className='tech-card'>
      <a href={technology.link}>
        <img src={technology.logoUrl} alt={technology.name} className='w-100'></img>
        <h3>{technology.name}</h3>
      </a>
    </div>
  );
}

TechnologyCard.propTypes = {
  technology: PropTypes.object.isRequired,
};
