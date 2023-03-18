import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: null,
};

const editContactSlice = createSlice({
  name: 'edditContact',
  initialState,
  reducers: {
    setContact(state, action) {
      state.contact = action.payload;
    },
    resetContact(state) {
      state.contact = null;
    },
  },
});

export const { setContact, resetContact } = editContactSlice.actions;
export const editContactReducer = editContactSlice.reducer;
