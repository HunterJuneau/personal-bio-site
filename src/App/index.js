import React, { Route } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/' component={<Home />} /> 
    </BrowserRouter>
  );
}

export default App;
