import PropTypes from 'prop-types';
import { Content } from 'shared/commonStyledComponents.jsx';

export function Section({ children }) {
  return (
    <section>
      <Content>{children}</Content>
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};
