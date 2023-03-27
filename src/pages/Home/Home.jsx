import React from 'react';
import {
  HomeTitle,
  HomeLogo,
  HomeWrapper,
  AppDescription,
  BenefitsListTitle,
  BenefitsList,
  BenefitsItem,
  IconWrap,
  BenefitTitle,
  BenefitDescription,
  StartButton,
  LogInLink,
} from './Home.styled';
import Logo from './images/home.png';
import { renderIcons } from 'utils/renderIcons';

const Home = () => {
  return (
    <main>
      <HomeTitle>Let Phone Genie Grant Your Every Connection Wish!</HomeTitle>
      <HomeWrapper>
        <div>
          <AppDescription>
            <p>
              &nbsp;&nbsp;Welcome to <span>Phone Genie</span> - the ultimate
              contact management solution! Our powerful and user-friendly
              interface makes it easy to create and organize your contacts with
              just a few clicks.
            </p>{' '}
            <p>
              &nbsp;&nbsp;Say goodbye to the hassle of searching through endless
              lists of contacts and hello to the convenience of having all your
              contacts in one place. <span>Phone Genie</span> has got you
              covered whether you're a busy professional, a social butterfly, or
              just looking for a way to stay organized.
            </p>
            <p>
              &nbsp;&nbsp;With <span>Phone Genie</span>, you'll have everything
              you need right at your fingertips, giving you the power to manage
              your contacts with ease and efficiency.
            </p>
            <p>
              &nbsp;&nbsp;So why wait? Let <span>Phone Genie</span> grant your
              every connection wish and take control of your contact management
              today! Experience the ultimate solution for your contact needs
              with <span>Phone Genie</span>. Try it now!
            </p>
          </AppDescription>
          <StartButton>GET STARTED</StartButton>
          <p>
            Have an account? <LogInLink to="/login">Log In</LogInLink>
          </p>
        </div>

        <HomeLogo src={Logo} alt="home-logo" />
      </HomeWrapper>
      <BenefitsListTitle>Our benefits</BenefitsListTitle>
      <BenefitsList>
        <BenefitsItem>
          <IconWrap>{renderIcons('create', 40)}</IconWrap>
          <BenefitTitle>Easily create and edit contacts</BenefitTitle>
          <BenefitDescription>
            With Phone Genie, you can create and edit contacts with just a few
            clicks, making it easy to keep your contacts up-to-date.
          </BenefitDescription>
        </BenefitsItem>

        <BenefitsItem>
          <IconWrap>{renderIcons('sort', 50)}</IconWrap>
          <BenefitTitle>Efficiently sort contacts</BenefitTitle>
          <BenefitDescription>
            Sort your contacts by alphabet or date of creation to easily find
            the contact you need.
          </BenefitDescription>
        </BenefitsItem>

        <BenefitsItem>
          <IconWrap>{renderIcons('delete', 40)}</IconWrap>
          <BenefitTitle>Recycle bin feature</BenefitTitle>
          <BenefitDescription>
            Never worry about accidentally deleting a contact again. Instead of
            permanently losing a contact, simply move it to the recycle bin for
            safekeeping. And if you ever need to restore that contact.
          </BenefitDescription>
        </BenefitsItem>

        <BenefitsItem>
          <IconWrap>{renderIcons('quickSearch', 40)}</IconWrap>
          <BenefitTitle>Quick search</BenefitTitle>
          <BenefitDescription>
            No more scrolling through endless lists of contacts - simply type in
            the name or phone number you're looking for and let Phone Genie do
            the rest.
          </BenefitDescription>
        </BenefitsItem>

        <BenefitsItem>
          <IconWrap>{renderIcons('favourite', 40)}</IconWrap>
          <BenefitTitle>Favourites list</BenefitTitle>
          <BenefitDescription>
            Easily mark your most frequently used contacts as favourites for
            quick and easy access. You can streamline your communication and
            stay connected with those who matter most.
          </BenefitDescription>
        </BenefitsItem>
        <BenefitsItem>
          <IconWrap>{renderIcons('group', 40)}</IconWrap>
          <BenefitTitle>Personalized contact groups</BenefitTitle>
          <BenefitDescription>
            Organize your contacts into personalized groups, such as friends,
            family, and work, for even more efficient management.
          </BenefitDescription>
        </BenefitsItem>
      </BenefitsList>
    </main>
  );
};

export default Home;
