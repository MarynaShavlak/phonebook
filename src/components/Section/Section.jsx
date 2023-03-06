import PropTypes from 'prop-types';
import {
  SectionStyled

} from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionStyled>
      <h2 className="section__title">{title}</h2>
      <div className="section__elements">{children}</div>
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}