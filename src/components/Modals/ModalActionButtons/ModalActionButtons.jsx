import React from 'react';
import PropTypes from 'prop-types';
import { renderIcons } from 'utils';
import { iconSize } from 'constants';
import { IconButton } from 'components/IconButton';
import { ModalButtonsBlock } from './ModalActionButtons.styled';

export const ModalActionButtons = ({
  confirmAriaLabel,
  cancelAriaLabel,
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalButtonsBlock>
      <IconButton aria-label={confirmAriaLabel} onClick={() => onConfirm()}>
        {renderIcons('confirm', iconSize.md)}
      </IconButton>
      <IconButton aria-label={cancelAriaLabel} onClick={() => onCancel()}>
        {renderIcons('cancel', iconSize.md)}
      </IconButton>
    </ModalButtonsBlock>
  );
};

ModalActionButtons.propTypes = {
  confirmAriaLabel: PropTypes.string.isRequired,
  cancelAriaLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
