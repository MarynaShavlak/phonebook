import styled from 'styled-components';

export const Error = styled.div`
  margin: 0;
  padding: 80px;
  text-align: center;
  font-size: ${props => props.theme.fontSize.xxl};
  font-style: italic;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.gapSize.large};
  align-items: center;
`;
