import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from 'shared';
import { List } from './FilterList.styled';

export const FilterList = ({ page }) => {
  return (
    <List>
      <li>
        <Filter
          // name="name"
          page={page}
        />
      </li>
      {/* <li>
        <Filter name="number" page={page} />
      </li> */}
    </List>
  );
};

FilterList.propTypes = {
  page: PropTypes.string.isRequired,
};
