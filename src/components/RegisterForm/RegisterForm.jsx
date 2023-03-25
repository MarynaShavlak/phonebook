import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const initialValues = {
  name: '',
  email: '',
  password: '',
};
const schema = Yup.object().shape({
  name: Yup.string().required('Please, enter your name'),
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
      <h1 style={{ fontSize: '70px' }}>Registration Form </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off"></Form>
      </Formik>
    </main>
  );
};
