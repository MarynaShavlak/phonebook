import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { SelectWrap } from './SelectedCheckbox.styled';

export const SelectCheckbox = ({ checked, onChange }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox ' } };
  return (
    <SelectWrap>
      <Checkbox
        {...label}
        checked={checked}
        icon={<CheckBoxOutlineBlankIcon />}
        checkedIcon={<CheckBoxIcon />}
        onChange={onChange}
        sx={{
          '& .MuiSvgIcon-root': { fontSize: 30 },
          color: '#feafe5',

          '&.Mui-checked': {
            color: '#feafe5',
          },
          // marginLeft: '20px',
        }}
      />
    </SelectWrap>
  );
};

SelectCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
