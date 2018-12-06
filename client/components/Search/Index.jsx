import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import SearchView from './SearchView';

/**
 *
 *
 * @description Search Component
 *
 * @returns { JSX }
 */
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      query: ''
    };
  }

  render() {
    const { categories } = this.props;
    return (
      <SearchView
        categories={categories}
      />
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = {};

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

Search.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
