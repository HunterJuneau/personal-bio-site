import React from 'react';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';

export default function Admin() {
  return (
    <>
      <Technologies admin={true} />
      <Projects admin={true} />
    </>
  );
}
