import React from 'react';

import { Link } from 'react-router-dom';
import {
  HomeTitle,
  HomeLogo,
  HomeInfo,
  HomeWrapper,
  AppDescription,
  BenefitsListTitle,
  BenefitsList,
  Item,
  DescWrap,
  IconWrap,
  StartButton,
  LogInLink,
} from './Home.styled';
import { Section } from 'components';
import Logo from './images/home.png';
import { renderIcons } from 'utils/renderIcons';
import { useAuth } from 'hooks';
import { OPERATION_TYPES } from 'constants';

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <main>
      <Section>
        <>
          {' '}
          <HomeTitle>
            Let Phone Genie Grant Your Every Connection Wish!
          </HomeTitle>
          <HomeWrapper>
            <HomeInfo>
              <AppDescription>
                <p>
                  Welcome to <span>Phone Genie</span> - the ultimate contact
                  management solution! Our powerful and user-friendly interface
                  makes it easy to create and organize your contacts with just a
                  few clicks.
                </p>{' '}
                <p>
                  Say goodbye to the hassle of searching through endless lists
                  of contacts and hello to the convenience of having all your
                  contacts in one place. <span>Phone Genie</span> has got you
                  covered whether you're a busy professional, a social
                  butterfly, or just looking for a way to stay organized.
                </p>
                <p>
                  With <span>Phone Genie</span>, you'll have everything you need
                  right at your fingertips, giving you the power to manage your
                  contacts with ease and efficiency.
                </p>
                <p>
                  So why wait? Let <span>Phone Genie</span> grant your every
                  connection wish and take control of your contact management
                  today! Experience the ultimate solution for your contact needs
                  with <span>Phone Genie</span>. Try it now!
                </p>
              </AppDescription>
              {!isLoggedIn && (
                <>
                  <Link to="/register">
                    <StartButton>GET STARTED</StartButton>
                  </Link>

                  <span>
                    Have an account? <LogInLink to="/login">Log In</LogInLink>
                  </span>
                </>
              )}
            </HomeInfo>

            {/* <HomeLogo
              src={Logo}
              alt="home-logo"
              // width="600px"
              // height="520px"
              loading="lazy"
            /> */}
          </HomeWrapper>
          <BenefitsListTitle>Our benefits</BenefitsListTitle>
          <BenefitsList>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    You can create and edit contacts with just a few clicks,
                    making it easy to keep your contacts up-to-date.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons('edit', 20)}
                <h2>Easily create and edit contacts</h2>
              </IconWrap>
            </Item>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    Sort your contacts by alphabet or date of creation to easily
                    find the contact you need.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons('alphaDown', 20)}
                <h2>Efficiently sort contacts</h2>
              </IconWrap>
            </Item>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    Protect contacts by moving them to recycle bin to prevent
                    accidental deletion and allow easy restoration.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons(OPERATION_TYPES.DELETE, 20)}
                <h2>Recycle bin feature</h2>
              </IconWrap>
            </Item>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    Efficiently search for contacts using either their name or
                    phone number with just a few clicks.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons('quickSearch', 20)}
                <h2>Quick search</h2>
              </IconWrap>
            </Item>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    Stay connected with important contacts by marking them as
                    favorites for easy and quick access.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons('favorite', 20)}
                <h2>Favorites list</h2>
              </IconWrap>
            </Item>
            <Item className="card">
              <DescWrap>
                <div>
                  <p>
                    {' '}
                    Organize your contacts into personalized groups for even
                    more efficient management.{' '}
                  </p>
                </div>
              </DescWrap>
              <IconWrap>
                {renderIcons('group', 20)}
                <h2>Personalized contact groups</h2>
              </IconWrap>
            </Item>
          </BenefitsList>
        </>
      </Section>
    </main>
  );
};

export default Home;
