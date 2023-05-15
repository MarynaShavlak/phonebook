import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import { clsx } from 'clsx';
import { TelLink, ContactData } from 'shared/commonStyledComponents';

export const HighlightContactDetails = ({
  contact,
  filter,
  defaultHighlighterClass = 'marked',
}) => {
  return (
    <ContactData>
      <Highlighter
        highlightClassName={clsx(defaultHighlighterClass)}
        searchWords={[`${filter}`]}
        autoEscape={true}
        textToHighlight={`${contact.name}`}
      />
      <TelLink href={`tel: ${contact.number}`}>
        <Highlighter
          highlightClassName={clsx(defaultHighlighterClass)}
          searchWords={[`${filter}`]}
          autoEscape={true}
          textToHighlight={` ${contact.number}`}
        />
      </TelLink>
    </ContactData>
  );
};

HighlightContactDetails.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  defaultHighlighterClass: PropTypes.string,
};
