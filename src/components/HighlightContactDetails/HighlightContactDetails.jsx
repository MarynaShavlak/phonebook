import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import { clsx } from 'clsx';

export const HighlightContactDetails = ({
  contact,
  filterByName,
  filterByNumber,
  defaultHighlighterClass,
  dynamicHighlighterClasses,
}) => {
  return (
    <>
      <Highlighter
        highlightClassName={clsx(
          defaultHighlighterClass,
          dynamicHighlighterClasses
        )}
        searchWords={[`${filterByName}`]}
        autoEscape={true}
        textToHighlight={`${contact.name}:`}
      />
      <Highlighter
        highlightClassName={clsx(
          defaultHighlighterClass,
          dynamicHighlighterClasses
        )}
        searchWords={[`${filterByNumber}`]}
        autoEscape={true}
        textToHighlight={` ${contact.number}`}
      />
    </>
  );
};

HighlightContactDetails.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  filterByName: PropTypes.string.isRequired,
  filterByNumber: PropTypes.string.isRequired,
  defaultHighlighterClass: PropTypes.string.isRequired,
  dynamicHighlighterClasses: PropTypes.string.isRequired,
};
