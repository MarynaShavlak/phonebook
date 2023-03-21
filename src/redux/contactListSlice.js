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
const handlePendingReducer = state => {
  return {
    ...state,
    isLoading: true,
    error: null,
  };
};
const handleRejectedReducer = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload,
  };
};

const contactListSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePendingReducer)
      .addCase(fetchContacts.fulfilled, (_, action) => {
        return {
          items: action.payload,
          isLoading: false,
          error: null,
        };
      })
      .addCase(fetchContacts.rejected, handleRejectedReducer)
      .addCase(addContact.pending, handlePendingReducer)
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          items: [action.payload, ...state.items],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addContact.rejected, handleRejectedReducer)
      .addCase(deleteContact.pending, handlePendingReducer)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const newContacts = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        return {
          items: newContacts,
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteContact.rejected, handleRejectedReducer)
      .addCase(updateContact.pending, handlePendingReducer)
      .addCase(updateContact.fulfilled, (state, action) => {
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
      })
      .addCase(updateContact.rejected, handleRejectedReducer),
});

export const contactListReducer = contactListSlice.reducer;
