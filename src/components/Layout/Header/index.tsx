import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Logo from './assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </Container>
  );
}
