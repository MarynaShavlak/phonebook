import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const CheckboxWithStarIcon = ({ checked = false, onChange }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox ' } };
  const defaultIcon = checked ? <StarIcon /> : <StarBorderIcon />;
  const checkedIcon = checked ? <StarBorderIcon /> : <StarIcon />;
  return (
    <Checkbox
      {...label}
      icon={defaultIcon}
      checkedIcon={checkedIcon}
      onChange={onChange}
      sx={{
        '& .MuiSvgIcon-root': { fontSize: 40 },
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
