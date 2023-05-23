import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import { clsx } from 'clsx';
import { TelLink, ContactData } from 'shared/commonStyledComponents';

export const HighlightContactDetails = ({
  item,
  filter,
  defaultHighlighterClass = 'marked',
}) => {
  return (
    <ContactData>
      <Highlighter
        highlightClassName={clsx(defaultHighlighterClass)}
        searchWords={[`${filter}`]}
        autoEscape={true}
        textToHighlight={`${item.name}`}
      />
      <TelLink href={`tel: ${item.number}`}>
        <Highlighter
          highlightClassName={clsx(defaultHighlighterClass)}
          searchWords={[`${filter}`]}
          autoEscape={true}
          textToHighlight={` ${item.number}`}
        />
      </TelLink>
    </ContactData>
  );
};

HighlightContactDetails.propTypes = {
  item: PropTypes.object.isRequired,
  filter: PropTypes.string,
  defaultHighlighterClass: PropTypes.string,
};
