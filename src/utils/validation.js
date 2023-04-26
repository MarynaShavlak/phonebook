import * as Yup from 'yup';

export const CONTACT_NAME_VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name cannot exceed 20 characters')
    .matches(
      /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+(([' -][a-zA-Zа-яА-ЯґҐєЄіІїЇ ])?[a-zA-Zа-яА-ЯґҐєЄіІїЇ]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
});
