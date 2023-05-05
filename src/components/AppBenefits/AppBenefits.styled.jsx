import styled from 'styled-components';

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: ${props => props.theme.gapSize.extra};
  margin-bottom: 80px;

  li:nth-child(2n) {
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      margin-left: 80px;
    }
  }
`;

export const Item = styled.li`
  position: relative;
  width: 250px;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 600px;
  }
  border-radius: ${props => props.theme.borderRadius.standart};

  padding: 20px 10px;
  border: 1px solid ${props => props.theme.colors.main};
  box-shadow: 5px 5px 8px 1px ${props => props.theme.colors.main};
  div:first-child {
    position: absolute;
    top: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: ${props => props.theme.borderRadius.extra};
    background-color: ${props => props.theme.colors.error};
    color: ${props => props.theme.colors.white};
    font-weight: 900;
    font-size: ${props => props.theme.fontSize.md};
  }

  h2 {
    margin-bottom: 10px;
    color: ${props => props.theme.colors.error};
    font-size: ${props => props.theme.fontSize.md};
    font-weight: 800;
    text-align: center;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.lg};
    }
  }
  p {
    font-size: ${props => props.theme.fontSize.xs};
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.sm};
    }
  }

  svg {
    position: absolute;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 25px;
  height: 25px;
  svg {
    fill: ${props => props.theme.colors.white};
    width: 15px;
    height: 15px;
    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      width: 25px;
      height: 25px;
    }
  }
  right: -1px;
  top: 0px;

  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 45px;
    height: 45px;
  }
`;

// #ef4287, #f2c94c, #bb6bd9, #9b51e0, #f787b4,
