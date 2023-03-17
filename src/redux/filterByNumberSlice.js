import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterByNumberSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterByNumber(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterByNumber } = filterByNumberSlice.actions;
export const filterByNumberReducer = filterByNumberSlice.reducer;
