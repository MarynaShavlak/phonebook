import { Error } from './ErrorMessage.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize, ICON_NAMES } from 'constants';

export function ErrorMessage() {
  return (
    <Error>
      {' '}
      {renderIcons(ICON_NAMES.ERROR, iconSize.lg)}
      <p>Ooops, something went wrong... Please, reload page..</p>
    </Error>
  );
}
