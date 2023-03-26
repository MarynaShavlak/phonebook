import React from 'react';
import { ReactComponent as HomeLogo } from './images/home.svg';
import { ReactComponent as Logo } from './images/initial-fashion-logo.svg';
const Home = () => {
  return (
    <main>
      <p style={{ fontSize: '70px' }}>Welcome to your phone book!</p>
      <p style={{ fontSize: '70px' }}>
        Registration will be available soon...{' '}
      </p>
      <HomeLogo />
      <Logo></Logo>
    </main>
  );
};

export default Home;
