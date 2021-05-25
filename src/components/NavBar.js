import React from 'react';
import { Navbar } from 'reactstrap'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar>
      <Link className='navbar-brand' to='/'>Hunter Juneau</Link>
    </Navbar>
  )
}
