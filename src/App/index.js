import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes
        technologies={technologies}
        setTechnologies={setTechnologies}
        projects={projects}
        setProjects={setProjects}
      />
    </BrowserRouter>
  );
}
