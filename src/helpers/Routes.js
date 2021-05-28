import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Admin from '../views/Admin';
import Home from '../views/Home';

export default function Routes({ admin }) {
  return (
    <Switch>
      {admin ? <Route exact path='/admin' component={Admin} /> : ''}
      <Route path='/' component={Home} />
    </Switch>
  );
}

Routes.propTypes = {
  admin: PropTypes.bool.isRequired,
};
