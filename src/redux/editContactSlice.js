import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
  // isModalOpen: false,
  // isContactEdited: false,
};

const editContactSlice = createSlice({
  name: 'edditContact',
  initialState,
  reducers: {
    setContact(state, action) {
      const { name, number } = action.payload;
      state.name = name;
      state.number = number;
      // state.isModalOpen = isModalOpen;
      // state.isContactEdited = isContactEdited;
    },

    setContactName(state, action) {
      state.name = action.payload;
      // state.isContactEdited = true;
    },
    setContactNumber(state, action) {
      state.number = action.payload;
      // state.isContactEdited = true;
    },
    // toggleModal(state) {
    //   state.isModalOpen
    //     ? (state.isModalOpen = false)
    //     : (state.isModalOpen = true);
    // },
  },
});

export const { setContact, setContactName, setContactNumber } =
  editContactSlice.actions;
export const editContactReducer = editContactSlice.reducer;
