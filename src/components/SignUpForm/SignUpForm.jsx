import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { renderIcons } from 'utils/renderIcons';
import { iconSize, ICON_NAMES } from 'constants';
import {
  FormWrapper,
  StyledForm,
  InfoList,
  InfoField,
  InfoInput,
  InfoLabel,
  InfoError,
  FormTitle,
  SignUpButton,
} from './SignUpForm.styled';
import * as yup from 'yup';
import Checkbox from 'react-custom-checkbox';
import * as authOperations from 'redux/auth/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  privacy: false,
};
const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Enter your name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: yup.string().email().required('Enter your email'),
  password: yup
    .string()
    .min(7, ({ min }) => `Password must be at least ${min} characters`)
    .max(16, ({ max }) => `Password must be no longer than ${max} characters`)
    .matches(/\d/, 'Password must have a number')
    .required('Enter your password'),
  confirm: yup
    .string()
    .required('Confirm your password')
    .oneOf([yup.ref('password')], 'Your passwords do not match'),
  privacy: yup
    .boolean()
    .oneOf([true], 'You must accept the Privacy Policy')
    .required('You must accept the Privacy Policy'),
});

export const SignUpForm = () => {
  const [clickedLabel, setClickedLabel] = useState(null);
  const dispatch = useDispatch();

  const handleLabelClick = fieldName => {
    setClickedLabel(fieldName);
  };
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(authOperations.userSignUp(newUser));
    resetForm();
  };

  return (
    <FormWrapper>
      <FormTitle>Sign Up Form</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => (
          <StyledForm autoComplete="off">
            <InfoList>
              <li>
                <InfoField>
                  {renderIcons(ICON_NAMES.PERSON, iconSize.xs)}

                  <InfoInput type="text" name="name" placeholder=" " />

                  <InfoLabel
                    htmlFor="name"
                    className={`user-form__info-label ${
                      clickedLabel === 'name' ? 'clicked' : ''
                    }`}
                    onClick={() => handleLabelClick('name')}
                  >
                    Username
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="name" component={InfoError} />
              </li>
              <li>
                <InfoField>
                  {renderIcons(ICON_NAMES.EMAIL, iconSize.xs)}

                  <InfoInput type="email" name="email" placeholder=" " />
                  <InfoLabel
                    htmlFor="email"
                    className={`user-form__info-label ${
                      clickedLabel === 'email' ? 'clicked' : ''
                    }`}
                    onClick={() => handleLabelClick('email')}
                  >
                    Email
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="email" component={InfoError} />
              </li>
              <li>
                <InfoField>
                  {renderIcons(ICON_NAMES.LOCK, iconSize.xs)}

                  <InfoInput
                    type="password"
                    name="password"
                    placeholder=" "
                    autoComplete="on"
                  />
                  <InfoLabel
                    htmlFor="password"
                    className={`user-form__info-label ${
                      clickedLabel === 'password' ? 'clicked' : ''
                    }`}
                    onClick={() => handleLabelClick('password')}
                  >
                    Password
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="password" component={InfoError} />
              </li>
              <li>
                <InfoField>
                  {renderIcons(ICON_NAMES.LOCK, iconSize.xs)}

                  <InfoInput
                    type="password"
                    name="confirm"
                    placeholder=" "
                    autoComplete="on"
                  />
                  <InfoLabel
                    htmlFor="confirm"
                    className={`user-form__info-label ${
                      clickedLabel === 'confirm' ? 'clicked' : ''
                    }`}
                    onClick={() => handleLabelClick('confirm')}
                  >
                    Confirm Password
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="confirm" component={InfoError} />
              </li>
            </InfoList>

            <Checkbox
              checked={touched.privacy && !errors.privacy}
              onChange={value => {
                setFieldValue('privacy', value);
              }}
              name="privacy"
              icon={
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    backgroundColor: '#fc458e',
                    alignSelf: 'stretch',
                  }}
                >
                  {renderIcons('check', iconSize.xs)}
                </div>
              }
              borderColor="#fc458e"
              borderRadius={20}
              style={{ overflow: 'hidden' }}
              size={20}
              label="I agree to the Privacy Policy and the Terms of Services"
              containerClassName="privacy-container"
              labelClassName="privacy"
            />
            <ErrorMessage name="privacy" component={InfoError} />
            <SignUpButton type="submit" disabled={isSubmitting}>
              SIGN UP
            </SignUpButton>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
