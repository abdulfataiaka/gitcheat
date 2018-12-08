import React from 'react';
import PropTypes from 'prop-types';

const Status = ({
  imageType, imageHeight, fontSize, baseText
}) => (
  <div className="status">
    <div>
      <img
        style={{ height: (imageHeight || '45px') }}
        alt="status img"
        src={
          (imageType === 'empty' && '/public/images/empty.png')
          || (imageType === 'error' && '/public/images/error.png')
          || (imageType === 'loading' && '/public/images/bolt.gif')
          || 'no-image'
        }
      />
      <h1
        style={{ fontSize: (fontSize || '16px') }}
      >
        {baseText || 'No base text specified'}
      </h1>
    </div>
  </div>
);

Status.propTypes = {
  imageType: PropTypes.string,
  imageHeight: PropTypes.string,
  fontSize: PropTypes.string,
  baseText: PropTypes.string
};

Status.defaultProps = {
  imageType: undefined,
  imageHeight: undefined,
  fontSize: undefined,
  baseText: undefined
};

export default Status;
