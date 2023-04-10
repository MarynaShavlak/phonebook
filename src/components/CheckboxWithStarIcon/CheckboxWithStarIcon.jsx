import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const CheckboxWithStarIcon = ({ checked = false, onChange }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox ' } };
  return (
    <Checkbox
      {...label}
      checked={checked}
      icon={<StarBorderIcon />}
      checkedIcon={<StarIcon />}
      onChange={onChange}
      sx={{
        '& .MuiSvgIcon-root': { fontSize: 30 },
        color: '#ef4287',

        '&.Mui-checked': {
          color: '#ef4287',
        },
        marginLeft: '20px',
      }}
    />
  );
};

CheckboxWithStarIcon.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
