import styled from 'styled-components';


export const FilterBlock = styled.div`
    .filter__field {
      display: flex;
      flex-direction:column;
      row-gap: 8px;
    }

     
    .filter__label {
      font-size: 30px;
      font-weight: 700;;
    }

    .filter__input {
      height: 70px;
      width: 100%;
      padding-left: 30px;
      font-size: 24px;
      font-weight: 600;
      color: #f66fa5;
      border: 5px solid #fab7d2;
      border-radius: 10px;
      &:focus {
        outline: none;
        border: 5px solid #f787b4;
      }
    }
`;