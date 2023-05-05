import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: ${props => props.theme.gapSize.extra};
  /* background-color: ${props => props.theme.colors.main}; */
  background: linear-gradient(to bottom right, #feafe5, #abe4ff);
  height: 800px;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    height: 800px;
  }
  @media screen and (min-width: ${props => props.theme.devices.desktop}) {
    height: 100vh;
  }
  div:first-child {
    padding-top: 150px;
    margin-left: auto;
    margin-right: auto;
    width: 260px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 350px;
    }
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      width: 600px;
    }
  }

  p {
    margin-top: 20px;
    text-align: center;
  }
`;

export const HomeTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.extra};
  font-weight: 700;
  text-align: center;
  animation: neon 1s ease infinite;

  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 10px #ef4287, 0 0 20px #ef4287, 0 0 20px #ef4287,
        0 0 20px #ef4287, 0 0 2px #fdcc00, 2px 2px 2px #14866d;
      color: #ffffff;
    }
    50% {
      text-shadow: 0 0 2px #b71540, 0 0 5px #b71540, 0 0 5px #b71540,
        0 0 5px #b71540, 0 0 2px #b71540, 4px 4px 2px #6e0e24;
      color: #eda0d3;
    }
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  column-gap: ${props => props.theme.gapSize.large};
  margin-bottom: 30px;
`;

export const HomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${props => props.theme.gapSize.large};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    flex-direction: row;
    column-gap: ${props => props.theme.gapSize.large};
    row-gap: 0;
  }

  div:first-child {
    min-width: 260px;
    width: 290px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 500px;
    }
    @media screen and (min-width: ${props => props.theme.devices.desktop}) {
      width: 600px;
    }
  }
`;

export const StartButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 30px;

  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  border: 5px solid transparent;
  border-radius: ${props => props.theme.borderRadius.standart};
  font-size: ${props => props.theme.fontSize.md};
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.xl};
  }
`;

export const DescWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    padding: 20px;
  }
  div {
    font-size: 1.2em;
    margin: 0;
    padding: 0 0 1em 0;
    font-weight: 500;
  }
  h2 {
    font-size: ${props => props.theme.fontSize.md};
    color: ${props => props.theme.colors.brightAccent};
  }
  p {
    text-align: justify;
    font-size: ${props => props.theme.fontSize.xs};
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.sm};
    }
  }
`;

// #ef4287, #f2c94c, #bb6bd9, #9b51e0, #f787b4,
