import React from 'react';

import LoginForm from '../../../components/LoginForm';

export default function Login({logIn, loginError}) {
  return <LoginForm login={logIn}/>
}
