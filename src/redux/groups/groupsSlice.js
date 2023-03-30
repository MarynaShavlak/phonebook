import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  groups: [],
};

const persistConfig = {
  key: 'groups',
  storage,
  whitelist: ['groups'],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addContactToGroup: (state, action) => {
      const groupIndex = state.groups.findIndex(
        group => group.name === action.payload.groupName
      );
      state.groups[groupIndex].contacts.push(action.payload.contact);
    },
    deleteContactFromGroup: (state, action) => {
      const groupIndex = state.groups.findIndex(
        group => group.name === action.payload.groupName
      );
      state.groups[groupIndex].contacts = state.groups[
        groupIndex
      ].contacts.filter(contact => contact !== action.payload.contact);
    },
    addContactGroup: (state, action) => {
      state.groups.push({ name: action.payload.groupName, contacts: [] });
    },
    deleteContactGroup: (state, action) => {
      state.groups = state.groups.filter(
        group => group.name !== action.payload.groupName
      );
    },
    renameContactGroup: (state, action) => {
      const groupIndex = state.groups.findIndex(
        group => group.name === action.payload.oldGroupName
      );
      state.groups[groupIndex].name = action.payload.newGroupName;
    },
  },
});

export const {
  addContactToGroup,
  deleteContactFromGroup,
  addContactGroup,
  deleteContactGroup,
  renameContactGroup,
} = groupsSlice.actions;

export const groupsReducer = persistReducer(persistConfig, groupsSlice.reducer);
