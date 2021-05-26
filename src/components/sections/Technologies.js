import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getTechnologies from '../../helpers/data/technologyData';
import TechnologyCard from '../cards/TechnologyCard';

export default function Technologies({ technologies, setTechnologies }) {
  useEffect(() => {
    getTechnologies().then(setTechnologies);
  }, []);

  return (
    <>
      <h1>Technologies</h1>
      <div className='technologies-container d-flex flex-flow justify-content-around m-2'>
        {technologies.map((techInfo) => (
          <TechnologyCard
            key={techInfo.firebaseKey}
            link={techInfo.link}
            logoUrl={techInfo.logoUrl}
            name={techInfo.name}
          />
        ))}
      </div>
    </>
  );
}

Technologies.propTypes = {
  technologies: PropTypes.array.isRequired,
  setTechnologies: PropTypes.func.isRequired,
};
