import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Loader, AppBar, ContactEditInfoBlock } from 'components';
import { Section, ContactForm, BackButton } from 'shared';
import { ContentWrapper, Main } from 'shared/commonStyledComponents.jsx';
import { selectContacts, fetchContacts } from 'redux/contacts';
import { showEditContactSuccess } from 'utils/notifications';
import { getContactById } from 'utils';
import { CONTACT_ACTIONS, ROUTES } from 'constants';
import {
  selectFavoritesContacts,
  updateFavoriteContact,
} from 'redux/favorites';
import { selectGroups, updateContactInGroups } from 'redux/groups';
import { isContactInFavorites, findGroupsForContact } from 'utils';

const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { contactId } = useParams();
  const navigate = useNavigate();
  const allContacts = useSelector(selectContacts);
  const favoriteContacts = useSelector(selectFavoritesContacts);
  const groups = useSelector(selectGroups);

  const contact = getContactById({ contactId, contacts: allContacts });

  useEffect(() => {
    if (!allContacts) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const backLinkHref =
    location.state?.from ?? `${ROUTES.ROOT + ROUTES.CONTACTS}`;

  const successEditContact = async (contact, updatedContact) => {
    await handleFavoriteContactUpdate(updatedContact);
    await handleGroupsUpdate(updatedContact);
    showEditContactSuccess(contact, updatedContact);
    navigate(`${ROUTES.ROOT + ROUTES.CONTACTS}`);
  };

  const handleFavoriteContactUpdate = async editedContact => {
    const isInFavorites = isContactInFavorites(contact, favoriteContacts);
    if (isInFavorites) {
      await dispatch(updateFavoriteContact(editedContact));
    }
  };

  const handleGroupsUpdate = async editedContact => {
    const contactGroups = findGroupsForContact(editedContact, groups);
    if (contactGroups.length) {
      await dispatch(updateContactInGroups(editedContact));
    }
  };

  return contact ? (
    <>
      <AppBar />
      <Main>
        <Section>
          <ContentWrapper>
            <BackButton pathTo={backLinkHref} />
            <ContactEditInfoBlock contact={contact} />
            <ContactForm
              action={CONTACT_ACTIONS.EDIT}
              contact={contact}
              onSubmit={successEditContact}
            />
          </ContentWrapper>
        </Section>
      </Main>
    </>
  ) : (
    <Loader />
  );
};

export default EditContact;
