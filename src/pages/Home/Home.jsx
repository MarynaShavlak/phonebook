import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeTitle,
  HomeInfo,
  HomeWrapper,
  StartButton,
  LogInLink,
  Header,
} from './Home.styled';
import { AppBenefits, AppDescription } from 'components';
import { Main } from 'shared/commonStyledComponents.jsx';
import { Section } from 'shared';
import Logo from 'components/Navigation/images/phone-genie-logo.png';
import HomeImage from './images/home.svg';

const Home = () => {
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <HomeTitle>Let Phone Genie Grant Your Every Connection Wish!</HomeTitle>
        <div>
          <Link to="/register">
            <StartButton>GET STARTED</StartButton>
          </Link>
          <p>
            Have an account? <LogInLink to="/login">Log In</LogInLink>
          </p>
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
