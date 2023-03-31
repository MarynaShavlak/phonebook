import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import './EditContactModal.css';
import { ContactEditor } from 'components';

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
    background: '#fab7d2',
    width: '700px',
    padding: '30px 20px',
    border: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

export const EditContactModal = ({ isOpen, onClose, data, ...otherProps }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal window to edit contact info"
      style={customStyles}
      closeTimeoutMS={300}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      <ContactEditor contact={data} {...otherProps} />
    </Modal>
  );
};

EditContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
