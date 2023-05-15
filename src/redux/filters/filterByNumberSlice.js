import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: '',
  favorites: '',
  groups: '',
  recyclebin: '',
};
const filterByNumberSlice = createSlice({
  name: 'filterByNumber',
  initialState,
  reducers: {
    setFilterByNumber(state, action) {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFilterByNumber } = filterByNumberSlice.actions;
export const filterByNumberReducer = filterByNumberSlice.reducer;
