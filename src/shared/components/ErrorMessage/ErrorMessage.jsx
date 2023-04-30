import { Error } from './ErrorMessage.styled';
import { renderIcons } from 'utils/renderIcons';
import { ICON_SIZES, ICON_NAMES } from 'constants';

export function ErrorMessage() {
  return (
    <Error>
      {' '}
      {renderIcons(ICON_NAMES.ERROR, ICON_SIZES.EXTRA_LARGE)}
      <p>Ooops, something went wrong... Please, reload page..</p>
    </Error>
  );
}
