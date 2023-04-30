import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { renderIcons } from 'utils';
import { ModalActionButtons } from 'components';
import { ICON_NAMES, ICON_SIZES } from 'constants';
import { CloseModalBtn } from 'shared/commonStyledComponents';

Modal.setAppElement('#root');

export const CustomModal = ({
  isOpen,
  onClose,
  onConfirm,
  children,
  action,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    content: {
      position: 'relative',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: width >= 768 ? '400px' : '280px',
      maxWidth: '100%',
      paddingTop: width >= 768 ? '30px' : '40px',
      paddingBottom: '30px',
      paddingLeft: width >= 768 ? '30px' : '20px',
      paddingRight: width >= 768 ? '30px' : '20px',
      background: 'white',
      boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
      border: '1px solid rgba(220, 227, 229, 0.8)',
      transform: 'translate(-50%, -50%)',
    },
  };

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
        content: customStyles.content,
      }}
    >
      <CloseModalBtn aria-label="Close modal" onClick={() => onClose()}>
        {renderIcons(ICON_NAMES.CLOSE, ICON_SIZES.MEDIUM)}
      </CloseModalBtn>
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

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
};
