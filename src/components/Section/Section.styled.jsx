import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding: 30px;

  .section__title {
      margin: 0 0 30px 0;
      text-align: center;
      font-size: 70px;
      font-weight: 900;
      color: black;
      text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  .section__elements {
    padding: 10px;
    display:flex;
    flex-direction: column;
    row-gap: 50px;
  }
  
`;
