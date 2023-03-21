import styled from 'styled-components';
import Highlighter from 'react-highlight-words';

export const ContactButtons = styled.div`
  display: flex;
  column-gap: 20px;
`;
export const ContactEl = styled.p`
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 30px;
  flex-grow: 1;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const ContactName = styled(Highlighter)`
  font-style: italic;
`;
