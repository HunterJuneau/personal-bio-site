import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTechnologies } from '../../helpers/data/technologyData';
import FormModal from '../FormModal';
import TechnologyCard from '../cards/TechnologyCard';

export default function Technologies({ admin }) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies().then(setTechnologies);
  }, []);

  return (
    <div className='my-5'>
      <h1 className='text-center'>Technologies</h1>
      {admin ? (
        <FormModal dataSource='Technology' setState={setTechnologies} />
      ) : (
        ''
      )}
      <div className='technologies-container d-flex flex-flow justify-content-center m-5'>
        {technologies.map((techInfo) => (
          <TechnologyCard
            key={techInfo.firebaseKey}
            technology={techInfo}
            admin={admin}
            setTechnologies={setTechnologies}
          />
        ))}
      </div>
    </div>
  );
}

Technologies.propTypes = {
  admin: PropTypes.bool.isRequired,
};
