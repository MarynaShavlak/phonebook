import React from 'react';
import PropTypes from 'prop-types';
import './ConfirmationModal.css';
import Modal from 'react-modal';
import { ModalActionButtons } from 'components';
import { renderIcons } from 'utils';
Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background: 'white',
    width: '700px',
    padding: '30px 20px',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

export const ConfirmationModal = ({
  isOpen,
  onClose,
  action,
  onConfirm,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={`Modal window to confirm to ${action}`}
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      <button
        aria-label="Close modal"
        onClick={() => onClose()}
        className="close-modal-btn"
      >
        {renderIcons('close', 30)}
      </button>
      {children}

      <ModalActionButtons
        confirmAriaLabel={`Confirm ${action}`}
        cancelAriaLabel={`Cancel ${action}`}
        onCancel={onClose}
        onConfirm={onConfirm}
      />
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};
