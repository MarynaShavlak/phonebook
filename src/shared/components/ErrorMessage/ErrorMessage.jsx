import { Error } from './ErrorMessage.styled';
import { renderIcons } from 'utils/renderIcons';
import { iconSize } from 'constants';

export function ErrorMessage() {
  return (
    <Error>
      {' '}
      {renderIcons('error', iconSize.lg)}
      <p>Ooops, something went wrong... Please, reload page..</p>
    </Error>
  );
}
