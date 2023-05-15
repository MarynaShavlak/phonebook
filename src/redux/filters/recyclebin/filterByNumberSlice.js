import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterByNumberSlice = createSlice({
  name: 'filterRecyclebinByNumber',
  initialState,
  reducers: {
    setFilterRecyclebinByNumber(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterRecyclebinByNumber } = filterByNumberSlice.actions;
export const filterRecyclebinByNumberReducer = filterByNumberSlice.reducer;
