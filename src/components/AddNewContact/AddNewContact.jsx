import React, { useState, useRef, useLayoutEffect } from 'react';
import { IconButton, EditModal } from 'components';
import { StickyBtn } from './AddNewContact.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

const AddNewContact = () => {
  const [addBtnHeight, setAddBtnHeight] = useState(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const addBtnRef = React.createRef(null);

  useLayoutEffect(() => {
    setAddBtnHeight(addBtnRef.current.offsetHeight);
  }, []);
  const toggleAddModal = () => setIsAddModalOpen(!isAddModalOpen);

  const windowHeight = useRef(window.innerHeight);
  const addBtnPosition = windowHeight.current - addBtnHeight - 40;

  return (
    <>
      {' '}
      {/* {isAddModalOpen && (
        <EditModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          // onEditContact={editContact}
        />
      )} */}
      <StickyBtn
        aria-label="Add new contact"
        ref={addBtnRef}
        onClick={toggleAddModal}
      >
        {renderIcons('add', iconSize.md)}
      </StickyBtn>
      {/* <ContactForm /> */}
    </>
  );
};

export default AddNewContact;
