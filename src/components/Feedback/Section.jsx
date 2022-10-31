import PropTypes from 'prop-types';
import { Wrapper } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <h2>{title}</h2>

    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
