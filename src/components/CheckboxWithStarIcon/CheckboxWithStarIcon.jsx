import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export const CheckboxWithStarIcon = ({ onChange }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox ' } };
  return (
    <Checkbox
      {...label}
      icon={<StarBorderIcon />}
      checkedIcon={<StarIcon />}
      onChange={onChange}
      sx={{
        '& .MuiSvgIcon-root': { fontSize: 40 },
        color: 'black',

        '&.Mui-checked': {
          color: '#ef4287',
        },
        marginLeft: '20px',
      }}
    />
  );
};

CheckboxWithStarIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
};
