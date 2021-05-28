import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

export default function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          email: authed.email,
          fullName: authed.displayName,
          uid: authed.uid,
        };
        setUser(userInfoObj);
      } else if (user === null) {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    if (user && user.uid === firebaseConfig.adminUid) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <NavBar admin={admin} user={user} />
      <Routes admin={admin} />
    </BrowserRouter>
  );
}
