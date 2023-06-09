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
        group => group.name === action.payload.group
      );
      state.groups[groupIndex].contacts.push(action.payload.contact);
    },
    deleteContactFromGroup: (state, action) => {
      const groupIndex = state.groups.findIndex(
        group => group.name === action.payload.group
      );
      state.groups[groupIndex].contacts = state.groups[
        groupIndex
      ].contacts.filter(contact => contact.id !== action.payload.contact.id);
    },
    addNewGroup: (state, action) => {
      state.groups.push({
        name: action.payload.name,
        id: action.payload.id,
        creationTime: action.payload.creationTime,
        contacts: [],
      });
    },
    deleteGroup: (state, action) => {
      state.groups = state.groups.filter(
        group => group.name !== action.payload.name
      );
    },
    renameGroup: (state, action) => {
      const groupIndex = state.groups.findIndex(
        group => group.name === action.payload.oldGroupName
      );
      state.groups[groupIndex].name = action.payload.newGroupName;
    },
    clearGroups(state) {
      state.groups = [];
    },
    updateContactInGroups: (state, action) => {
      const newGroups = state.groups.map(group => {
        const updatedContacts = group.contacts.map(c => {
          if (c.id === action.payload.id) {
            return {
              ...c,
              name: action.payload.name,
              number: action.payload.number,
            };
          }
          return c;
        });

        return {
          ...group,
          contacts: updatedContacts,
        };
      });
      state.groups = newGroups;
    },

    updateContactsOrderInGroup: (state, action) => {
      const { groupName, contacts } = action.payload;
      const groupIndex = state.groups.findIndex(
        group => group.name === groupName
      );
      state.groups[groupIndex].contacts = contacts;
    },
  },
});

export const {
  addContactToGroup,
  deleteContactFromGroup,
  addNewGroup,
  deleteGroup,
  renameGroup,
  clearGroups,
  updateContactInGroups,
  updateContactsOrderInGroup,
} = groupsSlice.actions;

export const groupsReducer = persistReducer(persistConfig, groupsSlice.reducer);
