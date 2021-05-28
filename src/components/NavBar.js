import React from 'react';
import {
  Navbar, Nav, NavItem, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOutUser, signInUser } from '../helpers/auth';

export default function NavBar({ admin, user }) {
  return (
    <Navbar>
      <Link className='navbar-brand' to='/'>
        Hunter Juneau
      </Link>
      {admin ? (
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link className='nav-link' to='/admin'>
              Admin
            </Link>
          </NavItem>
        </Nav>
      ) : (
        ''
      )}
      {user ? (
        <Button onClick={signOutUser} color='primary'>
          Log Out
        </Button>
      ) : (
        <Button onClick={signInUser} color='warning'>
          Log In
        </Button>
      )}
    </Navbar>
  );
}

NavBar.propTypes = {
  admin: PropTypes.bool,
  user: PropTypes.any,
};
