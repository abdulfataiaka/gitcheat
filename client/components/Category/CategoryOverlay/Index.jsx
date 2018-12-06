/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HelpItem from '../../Partials/HelpItem/Index';
import Examples from './Examples/Index';
import Video from './Video/Index';

const CategoryOverlay = ({ show, help, categoryOverlayShow }) => (
  <div
    id="category-overlay"
    style={{ display: `${show ? 'block' : 'none'}` }}
  >
    { help && (
      <div id="heading">
        <HelpItem
          first
          variant="heading"
          help={help}
        />
      </div>
    )}

    { categoryOverlayShow === 'examples' && <Examples examples={help.examples} /> }
    { categoryOverlayShow === 'examples' && <Examples examples={help.examples} /> }
    { categoryOverlayShow === 'video' && <Video video={help.video} /> }
  </div>
);

CategoryOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  help: PropTypes.shape({}),
  categoryOverlayShow: PropTypes.string
};

CategoryOverlay.defaultProps = {
  help: null,
  categoryOverlayShow: null
};

const mapStateToProps = ({ helps, global: { helpId, categoryOverlayShow } }) => ({
  help: helps.filter(help => help._id === helpId)[0],
  categoryOverlayShow
});

export default connect(mapStateToProps, null)(CategoryOverlay);
