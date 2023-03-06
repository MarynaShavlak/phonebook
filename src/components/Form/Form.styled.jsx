import styled from 'styled-components';

export const FormStyled = styled.form`
  padding: 10px;
  display: flex;
  flex-direction:column;
  row-gap: 40px;
`;


export const FormList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`;

export const FormItem = styled.li`
    .contact-form__field {
      display: flex;
      flex-direction:column;
      row-gap: 8px;
    }

    .contact-from__wrapper {
      position: relative;
    }
    .contact-form__icon {
      position:absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
       

    }
    .contact-form__label {
      font-size: 30px;
      font-weight: 700;;
    }

    .contact-form__input {
      height: 70px;
      width: 100%;
      padding-left: 70px;
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