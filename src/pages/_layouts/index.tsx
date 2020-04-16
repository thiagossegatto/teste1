import React from 'react';
import Header from 'components/Layout/Header';
import Routes from 'routes';
import { Container } from './styled';

export default function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  );
}
