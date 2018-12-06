import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const HelpItemView = ({
  first,
  variant,
  closeOverlay,
  examplesClick,
  videoClick,
  help: {
    type,
    title,
    content,
    video,
    examples
  }
}) => (
  <div className="help-box" style={!first ? {} : { marginTop: 0 }}>
    <h1 className="help-title">
      { title || '' }
      {
        variant === 'heading'
          ? (
            <button
              type="button"
              onClick={closeOverlay}
            >
              <i className="fas fa-times" />
            </button>
          ) : (
            <Fragment>
              { examples && (
                <button
                  type="button"
                  onClick={examplesClick}
                >
                  <i className="fas fa-sticky-note" />
                </button>
              )}

              { video && (
                <button
                  type="button"
                  onClick={videoClick}
                >
                  <i className="fas fa-video" />
                </button>
              )}
            </Fragment>
          )
      }
    </h1>
    <div className={`colordiv ${type}`}>
      { type === 'cmd' && '$ ' }
      { content }
    </div>
  </div>
);

HelpItemView.propTypes = {
  help: PropTypes.shape({}).isRequired,
  first: PropTypes.bool,
  variant: PropTypes.string,
  videoClick: PropTypes.func.isRequired,
  examplesClick: PropTypes.func.isRequired,
  closeOverlay: PropTypes.func.isRequired
};

HelpItemView.defaultProps = {
  first: false,
  variant: undefined
};

export default HelpItemView;
