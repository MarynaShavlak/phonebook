import PropTypes from 'prop-types';
import {
Button

} from './OperationButton.styled';

export function OperationButton({ children }) {
  return (
    <Button type="submit">
      {children}
    </Button>
  )
}

OperationButton.propTypes = {
  children: PropTypes.string.isRequired,
}