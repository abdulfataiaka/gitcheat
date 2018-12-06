import React from 'react';
import PropTypes from 'prop-types';
import HelpItemView from './View';

const HelpItem = ({ help, first }) => (
  <HelpItemView
    help={help}
    first={first}
  />
);

HelpItem.propTypes = {
  help: PropTypes.shape({
    video: PropTypes.string,
    examples: PropTypes.string,
    _id: PropTypes.number.isRequired
  }).isRequired,
  first: PropTypes.bool
};

HelpItem.defaultProps = {
  first: false
};

export default HelpItem;
