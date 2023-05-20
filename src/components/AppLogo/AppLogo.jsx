import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PhoneLogo } from './AppLogo.styled';
import Logo from './images/phone-genie-logo.png';

export const AppLogo = () => {
  const isTablet = useMediaQuery('(min-width:768px)');
  const isDesktop = useMediaQuery('(min-width:1200px)');

  let logoHeight = '60px';
  let logoWidth = '200px';

  if (isTablet && !isDesktop) {
    logoHeight = '50px';
    logoWidth = '165px';
  }

  return (
    <PhoneLogo src={Logo} alt="logo" height={logoHeight} width={logoWidth} />
  );
};
