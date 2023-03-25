import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';
const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactListSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
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
        state.items = newContacts;
      })
      .addMatcher(isAnyOf(...getActions('pending')), (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactListReducer = contactListSlice.reducer;
