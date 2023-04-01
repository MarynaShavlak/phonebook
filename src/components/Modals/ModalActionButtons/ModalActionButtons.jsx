import React from 'react';
import PropTypes from 'prop-types';
import { ModalButtonsBlock, Button } from './ModalActionButtons.styled';

export const ModalActionButtons = ({
  confirmAriaLabel,
  cancelAriaLabel,
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalButtonsBlock>
      <li>
        <Button aria-label={confirmAriaLabel} onClick={() => onConfirm()}>
          CONFIRM
        </Button>
      </li>
      <li>
        <Button aria-label={cancelAriaLabel} onClick={() => onCancel()}>
          CANCEL
        </Button>
      </li>
    </ModalButtonsBlock>
  );
};

ModalActionButtons.propTypes = {
  confirmAriaLabel: PropTypes.string.isRequired,
  cancelAriaLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
