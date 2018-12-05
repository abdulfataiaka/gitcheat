import React from 'react';
import PropTypes from 'prop-types';

const HelpItemView = ({
  first,
  help: {
    type,
    title,
    content,
  }
}) => (
  <div className="help-box" style={!first ? {} : { marginTop: 0 }}>
    <h1 className="help-title">
      { title || '' }
    </h1>
    <div className={`colordiv ${type}`}>
      { type === 'cmd' && '$ ' }
      { content }
    </div>
  </div>
);

HelpItemView.propTypes = {
  help: PropTypes.shape({}).isRequired,
  first: PropTypes.bool
};

HelpItemView.defaultProps = {
  first: false
};

export default HelpItemView;
