import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
  isModalOpen: false,
  isContactEdited: false,
};
const contactSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    setContact: (state, action) => {
      state.name = action.payload.name;
      state.number = action.payload.number;
    },

    setNewContactName: (state, action) => {
      state.name = action.payload;
      // state.isContactEdited = true;
    },
    setNewContactNumber: (state, action) => {
      state.number = action.payload;
      // state.isContactEdited = true;
    },
    toggleModal: state => {
      state.isModalOpen
        ? (state.isModalOpen = false)
        : (state.isModalOpen = true);
    },
  },
});

export const { setContact, setNewContactName, setNewContactNumber } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
