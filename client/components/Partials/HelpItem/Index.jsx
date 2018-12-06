import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HelpItemView from './View';
import { setCurrentHelpId } from '../../../thunks/helpThunk';
import { closeCategoryOverlay, setCategoryOverlayShow } from '../../../thunks/categoryThunk';

class HelpItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onVideoClick = () => {
    const { _id } = this.props.help;
    this.props.setCurrentHelpId(_id);
    this.props.setCategoryOverlayShow('video');
  };

  onExamplesClick = () => {
    const { _id } = this.props.help;
    this.props.setCurrentHelpId(_id);
    this.props.setCategoryOverlayShow('examples');
  };

  closeOverlay = () => {
    this.props.closeCategoryOverlay();
  }

  render() {
    const {
      help, first, variant
    } = this.props;

    return (
      <HelpItemView
        help={help}
        first={first}
        variant={variant}
        closeOverlay={this.closeOverlay}
        videoClick={this.onVideoClick}
        examplesClick={this.onExamplesClick}
      />
    );
  }
}

HelpItem.propTypes = {
  help: PropTypes.shape({
    video: PropTypes.string,
    examples: PropTypes.string,
    _id: PropTypes.number.isRequired
  }).isRequired,
  first: PropTypes.bool,
  variant: PropTypes.string,
  closeCategoryOverlay: PropTypes.func.isRequired,
  setCurrentHelpId: PropTypes.func.isRequired,
  setCategoryOverlayShow: PropTypes.func.isRequired
};

HelpItem.defaultProps = {
  first: false,
  variant: undefined
};

const mapDispatchToProps = {
  closeCategoryOverlay,
  setCurrentHelpId,
  setCategoryOverlayShow
};

export default connect(null, mapDispatchToProps)(HelpItem);
