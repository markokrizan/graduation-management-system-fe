import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import ProtectedRoutes from '../ProtectedRoutes';
import PublicRoutes from '../PublicRoutes';

import './AppLayout.css';
 
export default function AppLayout({logOut, isLoggedIn, loggedInUser, getMe}) {

  useEffect(() => {
    isLoggedIn && getMe();
  }, [])
  
  return (
      <Fragment>
        <Loader/>
        <Header logOut = {logOut} loggedInUser = {loggedInUser}/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Router>
            <>
            {!isLoggedIn && <div>
              <PublicRoutes/>
            </div>}
            {isLoggedIn &&
              <main>
                <ProtectedRoutes/>
              </main>
            }
            </>
          </Router>
        </Container>
      </Fragment>
  );
}
