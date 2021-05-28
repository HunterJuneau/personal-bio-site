import React, { useState, useEffect } from 'react';
import getTechnologies from '../../helpers/data/technologyData';
import TechnologyCard from '../cards/TechnologyCard';

export default function Technologies() {
  const [technologies, setTechnologies] = useState([]);

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
