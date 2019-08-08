import React from 'react';
import { Container } from './Login_Styles';

import logo from '~/assets/logo.svg';

export default function Login() {
  return (
    <Container>
      <form>
        <img src={logo} alt="tinDev" />
        <input placeholder="Type your GitHub username" />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}
