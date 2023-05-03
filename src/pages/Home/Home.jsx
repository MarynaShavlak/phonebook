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
import Logo from 'components/Navigation/images/phone-genie-logo.png';
import HomeImage from './images/home.svg';
import { ROUTES } from 'constants';

const Home = () => {
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        {/* <HomeTitle> */}
        {/* Let Phone Genie Grant Your Every Connection Wish! */}
        <HomeTitle width="100%">
          {/* <defs>
              <pattern
                id="polka-dots"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
              </pattern>
            </defs> */}

          {/* <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#polka-dots)"
            >
              {' '}
            </rect> */}

          <text x="50%" y="60%" text-anchor="middle">
            Let Phone Genie Grant Your Every Connection Wish!
          </text>
        </HomeTitle>
        {/* </HomeTitle> */}

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
