import styled from 'styled-components';

export const ControlBar = styled.div`
  display: flex;
  column-gap: ${props => props.theme.gapSize.extraSmall};
`;

export const SelectBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 75px;
  height: 65px;
  align-items: center;
  column-gap: ${props => props.theme.gapSize.standard};
  padding: 5px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    width: 80px;
    font-size: ${props => props.theme.fontSize.sm};
    &:hover {
      color: ${props => props.theme.colors.hover};
      transform: scale(1.2);
    }
  }
`;
export const SelectedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  /* width: 100%; */
  align-items: center;
  column-gap: ${props => props.theme.gapSize.standard};
  padding: 5px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 500;
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    font-size: ${props => props.theme.fontSize.sm};
  }

  span {
    font-size: ${props => props.theme.fontSize.xl};
    line-height: 1.25;
  }
`;

export const ChoseActionBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  column-gap: ${props => props.theme.gapSize.standard};
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
  flex-grow: 1;
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.theme.colors.main};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    justify-content: space-between;
  }
  span {
    font-size: ${props => props.theme.fontSize.sm};
    font-weight: 700;
    flex-grow: 1;
    text-align: center;

    @media screen and (min-width: ${props => props.theme.devices.tablet}) {
      font-size: ${props => props.theme.fontSize.md};
    }
  }
`;

export const BtnList = styled.ul`
  display: flex;

  @media screen and (max-width: 374px) {
    width: 100px;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${props => props.theme.gapSize.extraSmall};
  }

  column-gap: ${props => props.theme.gapSize.extraSmall};
  @media screen and (min-width: ${props => props.theme.devices.tablet}) {
    column-gap: ${props => props.theme.gapSize.medium};
  }

  button {
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius.standard};
    background-color: ${props => props.theme.colors.white};
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
      color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:not(:disabled) {
      @media screen and (min-width: ${props => props.theme.devices.tablet}) {
        &:hover {
          background-color: ${props => props.theme.colors.black};
          color: ${props => props.theme.colors.white};
        }
      }
    }
  }
`;
