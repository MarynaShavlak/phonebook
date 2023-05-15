import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterByNumberSlice = createSlice({
  name: 'filterFavoritesByNumber',
  initialState,
  reducers: {
    setFilterFavoritesByNumber(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterFavoritesByNumber } = filterByNumberSlice.actions;
export const filterFavoritesByNumberReducer = filterByNumberSlice.reducer;
