import PropTypes from 'prop-types';
import { Button } from 'shared/commonStyledComponents.jsx';

export function OperationButton({ children }) {
  return <Button type="submit">{children}</Button>;
}

OperationButton.propTypes = {
  children: PropTypes.string.isRequired,
};
