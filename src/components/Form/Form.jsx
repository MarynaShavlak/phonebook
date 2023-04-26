// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { FormStyled, FormItem, FormList, Phone, Name } from './Form.styled';
// import { renderIcons } from 'utils/renderIcons';
// import { OperationButton } from 'components';
// import 'react-phone-number-input/style.css';
// import PhoneInput, {
//   isValidPhoneNumber,
//   isPossiblePhoneNumber,
// } from 'react-phone-number-input';

// export function Form({
//   name,
//   number,
//   operationType,
//   onSubmit,
//   onNameChange,
//   onNumberChange,
// }) {
//   return (
//     <FormStyled onSubmit={onSubmit}>
//       <FormList>
//         <FormItem>
//           <label>Name</label>
//           <Name
//             type="text"
//             name="name"
//             value={name}
//             onChange={onNameChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </FormItem>
//         <FormItem>
//           <label>Number</label>
//           <Phone
//             international
//             countryCallingCodeEditable={false}
//             placeholder="Enter phone number"
//             defaultCountry="UA"
//             value={number}
//             onChange={onNumberChange}
//             required
//           />
//         </FormItem>
//       </FormList>
//       <OperationButton>{operationType}</OperationButton>
//     </FormStyled>
//   );
// }

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   onNameChange: PropTypes.func.isRequired,
//   onNumberChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   operationType: PropTypes.string.isRequired,
// };
