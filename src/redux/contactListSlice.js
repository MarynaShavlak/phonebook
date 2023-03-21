import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactListSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [fetchContacts.fulfilled]: (_, action) => {
      return {
        items: action.payload,
        isLoading: false,
        error: null,
      };
    },
    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
    [addContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        items: [action.payload, ...state.items],
        isLoading: false,
        error: null,
      };
    },
    [addContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [deleteContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      const newContacts = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      return {
        items: newContacts,
        isLoading: false,
        error: null,
      };
    },
    [deleteContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [updateContact.pending]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [updateContact.fulfilled]: (state, action) => {
      const newContacts = state.items.map(el => {
        if (el.name === action.payload.name) {
          const newEl = {
            id: el.id,
            name: el.name,
            number: action.payload.number,
          };
          return newEl;
        }
        if (el.number === action.payload.number) {
          const newEl = {
            id: el.id,
            name: action.payload.name,
            number: el.number,
          };
          return newEl;
        }
        return el;
      });

      return {
        items: newContacts,
        isLoading: false,
        error: null,
      };
    },
    [updateContact.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const contactListReducer = contactListSlice.reducer;
