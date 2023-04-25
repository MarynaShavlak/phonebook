import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeMain,
  HomeTitle,
  HomeInfo,
  HomeWrapper,
  AppDescription,
  BenefitsList,
  Item,
  IconWrap,
  StartButton,
  LogInLink,
  Header,
  Benefit,
} from './Home.styled';
import { Section } from 'components';
import { renderIcons } from 'utils/renderIcons';
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
      <HomeMain>
        <Section>
          {' '}
          <HomeWrapper>
            <HomeInfo>
              <div>
                <img src={HomeImage} alt="logo" />
              </div>
              <AppDescription>
                <p>
                  <span>Phone Genie</span> - the ultimate contact management
                  solution.
                </p>{' '}
                <p>
                  With a powerful and user-friendly interface, it's easy to
                  create and organize your contacts.
                </p>
                <p>
                  Say goodbye to endless lists of contacts and hello to
                  convenience.
                </p>
                <p>
                  Whether you're a busy professional or a social butterfly,{' '}
                  <span>Phone Genie</span> has got you covered.
                </p>
                <p>
                  Try it now and take control of your contact management today!
                </p>
              </AppDescription>
            </HomeInfo>
          </HomeWrapper>
        </Section>
        <Section>
          <BenefitsList>
            <Item className="card">
              <div>1</div>
              <IconWrap>{renderIcons('pencil', 15)}</IconWrap>
              <Benefit>
                <h2>Easily create and edit contacts</h2>
                <p>
                  Phone Genie provides the functionality to create and modify
                  contacts, facilitating the maintenance of an up-to-date
                  directory of your contacts.
                </p>
              </Benefit>
            </Item>
            <Item className="card">
              <div>2</div>
              <IconWrap>{renderIcons('alphaDown', 15)}</IconWrap>
              <Benefit>
                <h2>Efficiently sort contacts</h2>
                <p>
                  Phone Genie efficiently manages contacts with a versatile
                  sorting feature, allowing convenient alphabetical or
                  date-based sorting.
                </p>
              </Benefit>
            </Item>
            <Item className="card">
              <div>3</div>
              <IconWrap>{renderIcons('delete', 15)}</IconWrap>
              <Benefit>
                <h2>Recycle bin feature</h2>
                <p>
                  Phone Genie offers the capability to move contacts to a
                  recycle bin, which serves as a protective measure against
                  unintentional deletion and allows for effortless recovery.
                </p>
              </Benefit>
            </Item>
            <Item className="card">
              <div>4</div>
              <IconWrap>{renderIcons('quickSearch', 15)}</IconWrap>
              <Benefit>
                <h2>Quick search</h2>
                <p>
                  Phone Genie offers a proficient feature that enables users to
                  perform a comprehensive search for their contacts with utmost
                  ease and efficiency.
                </p>
              </Benefit>
            </Item>
            <Item className="card">
              <div>5</div>
              <IconWrap>{renderIcons('favorite', 15)}</IconWrap>
              <Benefit>
                <h2>Favorites list</h2>
                <p>
                  Phone Genie lets users easily stay in touch with important
                  contacts by marking them as favorites, allowing for quick and
                  efficient communication.
                </p>
              </Benefit>
            </Item>
            <Item className="card">
              <div>6</div>
              <IconWrap>{renderIcons('group', 15)}</IconWrap>
              <Benefit>
                <h2>Contact groups</h2>
                <p>
                  Phone Genie provides users with the ability to group their
                  contacts for optimal organization and management of contact
                  information.
                </p>
              </Benefit>
            </Item>
          </BenefitsList>
        </Section>
      </HomeMain>
    </>
  );
};

export default Home;
