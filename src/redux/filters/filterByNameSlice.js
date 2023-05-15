import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: '',
  favorites: '',
  groups: '',
  recyclebin: '',
};
const filterByNameSlice = createSlice({
  name: 'filterByName',
  initialState,
  reducers: {
    setFilterByName(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFilterByName } = filterByNameSlice.actions;
export const filterByNameReducer = filterByNameSlice.reducer;
