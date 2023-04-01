import { createSelector } from 'reselect';

export const selectGroups = state => state.groups.groups;

export const selectGroupNames = createSelector(selectGroups, groups =>
  groups.map(group => group.name)
);
