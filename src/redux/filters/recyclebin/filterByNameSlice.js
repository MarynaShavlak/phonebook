import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};
const filterByNameSlice = createSlice({
  name: 'filterRecyclebinByName',
  initialState,
  reducers: {
    setFilterRecyclebinByName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterRecyclebinByName } = filterByNameSlice.actions;
export const filterRecyclebinByNameReducer = filterByNameSlice.reducer;
