import React, { useState, useEffect } from 'react';
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      contentLabel={`Modal window to confirm to ${action}`}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: customStyles.overlay,
        content: {
          ...customStyles.content,
          width: width >= 768 ? '700px' : '80%',
          maxWidth: '100%',
        },
      }}
    >
      <button
        aria-label="Close modal"
        onClick={() => onClose()}
        className="close-modal-btn"
      >
        {renderIcons('close', 20)}
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
