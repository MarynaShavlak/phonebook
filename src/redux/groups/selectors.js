import { createSelector } from 'reselect';
import { selectFilter } from 'redux/filters/selectors';
export const selectGroups = state => state.groups.groups;

export const selectGroupNames = createSelector(selectGroups, groups =>
  groups.map(group => group.name)
);

export const selectFilteredGroups = createSelector(
  [selectGroups, selectFilter('groups')],

  (groups, filter) => {
    const normalizeFilter = filter.toLowerCase();
    if (!groups) return [];
    const filteredGroups = groups.filter(group => {
      return group.name.toLowerCase().includes(normalizeFilter);
    });
    return filteredGroups;
  }
);
