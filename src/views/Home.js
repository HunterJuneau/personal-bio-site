import React from 'react';
import Bio from '../components/sections/Bio';
import Technologies from '../components/sections/Technologies';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <>
      <Bio />
      <Technologies admin={false} />
      <Projects admin={false} />
    </>
  );
}
