import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ video }) => (
  <div id="video">
    <div>
      { video && (
        <iframe
          title="Tutorial Video"
          width="100%"
          height="100%"
          src={`${video}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          autoPlay
          allowFullScreen
        />
      )}
    </div>
  </div>
);

Video.propTypes = {
  video: PropTypes.string,
};

Video.defaultProps = {
  video: null
};

export default Video;
