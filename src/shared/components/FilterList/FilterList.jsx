import React from 'react';
import { Filter } from 'shared';
import { List } from './FilterList.styled';

export const FilterList = () => {
  return (
    <List>
      <li>
        <Filter name="name" />
      </li>
      <li>
        <Filter name="number" />
      </li>
    </List>
  );
};
