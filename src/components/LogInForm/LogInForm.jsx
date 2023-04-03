import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
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
} from 'components/SignUpForm/SignUpForm.styled';
import * as yup from 'yup';
import * as authOperations from 'redux/auth/authOperations';

const initialValues = {
  email: '',
  password: '',
};
const schema = yup.object().shape({
  email: yup.string().email().required('Enter your email'),
  password: yup.string().required('Enter your password'),
});

export const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    setSubmitting(false);
    dispatch(authOperations.userSignIn(user));
    resetForm();
  };
  return (
    <FormWrapper>
      <FormTitle>LOG IN</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm autoComplete="off">
            <InfoList>
              <li>
                <InfoField>
                  {renderIcons('email', iconSize.xs)}

                  <InfoInput type="email" name="email" placeholder=" " />
                  <InfoLabel htmlFor="email" className="user-form__info-label">
                    Email
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="email" component={InfoError} />
              </li>
              <li>
                <InfoField>
                  {renderIcons('lock', iconSize.xs)}

                  <InfoInput type="password" name="password" placeholder=" " />
                  <InfoLabel
                    htmlFor="password"
                    className="user-form__info-label"
                  >
                    Password
                  </InfoLabel>
                </InfoField>
                <ErrorMessage name="password" component={InfoError} />
              </li>
            </InfoList>

            <SignUpButton type="submit" disabled={isSubmitting}>
              LOG IN
            </SignUpButton>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
