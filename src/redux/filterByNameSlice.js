import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterByNameSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterByName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterByName } = filterByNameSlice.actions;
export const filterByNameReducer = filterByNameSlice.reducer;
