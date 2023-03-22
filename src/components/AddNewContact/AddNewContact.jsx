import React, { useState } from 'react';
import { StickyBtn } from './AddNewContact.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';
import Modal from 'react-modal';
import { ContactForm } from 'components';

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

const AddNewContact = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

  return (
    <>
      <StickyBtn aria-label="Add new contact" onClick={toggleAddModal}>
        {renderIcons('add', iconSize.md)}
      </StickyBtn>
      {isAddModalOpen && (
        <Modal
          isOpen={isAddModalOpen}
          contentLabel="Modal window to edit contact info"
          style={customStyles}
          closeTimeoutMS={300}
          shouldCloseOnOverlayClick={true}
          onRequestClose={toggleAddModal}
        >
          <ContactForm onSubmit={toggleAddModal} />
        </Modal>
      )}
    </>
  );
};

export default AddNewContact;
