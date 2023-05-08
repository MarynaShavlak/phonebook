import React from 'react';
import PropTypes from 'prop-types';
import { ConfirmationModal, AddContactToGroupModal } from 'components';
import {
  SelectBtn,
  SelectedInfo,
  ControlBar,
  ChoseActionBlock,
  BtnList,
} from './MultiSelectBar.styled';
import { renderIcons, getSelectButtonText } from 'utils';
import { useModal } from 'hooks';
import { ICON_NAMES, ICON_SIZES, OPERATION, CONTACT_ACTIONS } from 'constants';

export const MultiSelectBar = ({ onSelectAllClick, selectedContacts }) => {
  console.log('selectedContacts: ', selectedContacts);
  const isAnyContactSelected = selectedContacts.length;
  const { isRemoveModalOpen, toggleRemoveModal } = useModal(OPERATION.REMOVE);
  const { isAddModalOpen, toggleAddModal } = useModal(OPERATION.ADD);

  const moveContactsToRecycleBin = () => {
    console.log('move to recyclebin');
  };
  return (
    <ControlBar>
      <SelectBtn type="button" onClick={onSelectAllClick}>
        {getSelectButtonText(isAnyContactSelected)}
      </SelectBtn>
      <ChoseActionBlock>
        <span>Choose Action</span>{' '}
        <BtnList>
          <button
            type="button"
            aria-label="Remove selected contacts to recycle bin"
            onClick={toggleRemoveModal}
          >
            {' '}
            {renderIcons(ICON_NAMES.DELETE, ICON_SIZES.MEDIUM_SMALL)}
          </button>
          <button
            type="button"
            aria-label="Add selected contacts to recycle to group"
            onClick={toggleAddModal}
          >
            {renderIcons(ICON_NAMES.GROUP, ICON_SIZES.MEDIUM_SMALL)}
          </button>
        </BtnList>
      </ChoseActionBlock>
      <SelectedInfo type="button">
        <span>{isAnyContactSelected}</span> Selected
      </SelectedInfo>
      {isRemoveModalOpen && (
        <ConfirmationModal
          isOpen={isRemoveModalOpen}
          onClose={toggleRemoveModal}
          data={selectedContacts}
          onConfirm={moveContactsToRecycleBin}
          action={CONTACT_ACTIONS.REMOVE_TO_RECYCLE_BIN}
        />
      )}
      {isAddModalOpen && (
        <AddContactToGroupModal
          isOpen={isAddModalOpen}
          onClose={toggleAddModal}
          // contact={contact}
        />
      )}
    </ControlBar>
  );
};

MultiSelectBar.propTypes = {
  onSelectAllClick: PropTypes.func.isRequired,
  selectedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  // items: PropTypes.arrayOf(PropTypes.object).isRequired,
  // handleClick: PropTypes.func.isRequired,
  // // handleSelectClick: PropTypes.func.isRequired,
  // handleSelectClick: PropTypes.func,
  // category: PropTypes.oneOf(Object.values(ITEM_CATEGORIES)).isRequired,
};
