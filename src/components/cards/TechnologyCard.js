import React from 'react';
import PropTypes from 'prop-types';

export default function TechnologyCard({ link, logoUrl, name }) {
  return (
    <div className='tech-card'>
      <a href={link}>
        <img src={logoUrl} className='w-100' ></img>
        <h3>{name}</h3>
      </a>
    </div>
  );
}

TechnologyCard.propTypes = {
  link: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
