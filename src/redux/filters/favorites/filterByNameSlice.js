import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterFavoritesByNameSlice = createSlice({
  name: 'filterFavoritesByName',
  initialState,
  reducers: {
    setFilterFavoritesByName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterFavoritesByName } = filterFavoritesByNameSlice.actions;
export const filterFavoritesByNameReducer = filterFavoritesByNameSlice.reducer;
