import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: '',
  favorites: '',
  groups: '',
  recyclebin: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
