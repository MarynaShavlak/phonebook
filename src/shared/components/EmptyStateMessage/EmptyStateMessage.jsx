import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'shared/commonStyledComponents.jsx';
import { Notification } from 'shared';
import { ROUTES } from 'constants';

export const EmptyStateMessage = ({ onActionBtnClick, page }) => {
  const isOnGroupsPage = page === ROUTES.GROUPS;
  const message = isOnGroupsPage
    ? 'You have not created any groups yet'
    : 'Add your first contact today and discover the amazing possibilities of Phone Genie!';

  return (
    <>
      <Notification message={message} />
      <Button type="button" onClick={onActionBtnClick}>
        {isOnGroupsPage ? 'Create group' : 'Add contact'}
      </Button>
    </>
  );
};

EmptyStateMessage.propTypes = {
  page: PropTypes.string.isRequired,
  onActionBtnClick: PropTypes.func.isRequired,
};
