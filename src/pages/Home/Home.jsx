import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeTitle,
  HomeInfo,
  HomeWrapper,
  StartButton,
  Header,
} from './Home.styled';
import { AppBenefits, AppDescription } from 'components';
import { Main } from 'shared/commonStyledComponents.jsx';
import { Section, AuthenticationPrompt } from 'shared';
import Logo from 'components/AppLogo/images/phone-genie-logo.png';
import HomeImage from './images/home.svg';
import { ROUTES } from 'constants';

const Home = () => {
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <HomeTitle>Let Phone Genie Grant Your Every Connection Wish!</HomeTitle>

        <div>
          <Link to={ROUTES.REGISTER}>
            <StartButton>GET STARTED</StartButton>
          </Link>
          <AuthenticationPrompt path={ROUTES.ROOT + ROUTES.LOGIN} />
        </div>
      </Header>
      <Main>
        <Section>
          <HomeWrapper>
            <HomeInfo>
              <div>
                <img src={HomeImage} alt="logo" />
              </div>
              <AppDescription />
            </HomeInfo>
          </HomeWrapper>
        </Section>
        <Section>
          <AppBenefits />
        </Section>
      </Main>
    </>
  );
};

export default Home;
