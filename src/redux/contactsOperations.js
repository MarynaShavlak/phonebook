import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.updateContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
