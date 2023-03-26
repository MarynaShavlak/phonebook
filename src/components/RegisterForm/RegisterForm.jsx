import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import {
  StyledForm,
  InfoList,
  InfoField,
  InfoInput,
  InfoLabel,
  InfoWrap,
  FormTitle,
} from './RegisterForm.styled';
import * as Yup from 'yup';
const initialValues = {
  name: '',
  email: '',
  password: '',
};
const schema = Yup.object().shape({
  name: Yup.string()
    .required('Please, enter your name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: Yup.string().email().required('Please, enter your email'),
  password: Yup.string()
    .required('Please, enter your password')
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .max(16, ({ max }) => `Password must be no longer than ${max} characters`)
    .matches(/\d/, 'Password must have a number'),
});

export const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('values: ', values);
    resetForm();
  };
  return (
    <main>
      <FormTitle>Registration Form </FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <InfoList>
            <li>
              <InfoField>
                {renderIcons('person', iconSize.sm)}

                <InfoInput type="text" name="name" placeholder=" " required />
                <InfoLabel htmlFor="name" className="register-form__info-label">
                  Username
                </InfoLabel>
              </InfoField>
            </li>
            <li>
              <InfoField>
                {renderIcons('email', iconSize.sm)}

                <InfoInput type="email" name="email" placeholder=" " required />
                <InfoLabel
                  htmlFor="email"
                  className="register-form__info-label"
                >
                  Email
                </InfoLabel>
              </InfoField>
            </li>
            <li>
              <InfoField>
                {renderIcons('lock', iconSize.sm)}

                <InfoInput
                  type="password"
                  name="password"
                  placeholder=" "
                  required
                />
                <InfoLabel
                  htmlFor="password"
                  className="register-form__info-label"
                >
                  Password
                </InfoLabel>
              </InfoField>
            </li>
          </InfoList>
        </StyledForm>
      </Formik>
    </main>
  );
};
