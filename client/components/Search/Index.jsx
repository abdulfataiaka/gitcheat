import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import SearchView from './SearchView';
import { search, setSearchResult } from '../../thunks/searchThunks';

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
      query: '',
      searching: false,
      fieldError: false
    };
  }

  onChange = (event) => {
    const { target: { value } } = event;
    this.setState(({ query }) => ({
      query: value.trim(),
      oldQuery: query,
      fieldError: false
    }));
  }

  onSubmit = () => {
    const { query } = this.state;

    if (query.length <= 0) {
      this.setState({ fieldError: true });
      return;
    }

    this.props.setSearchResult([]);
    this.setState({ searching: true });

    this.props.search(query)
      .then(() => {
        this.setState({
          searching: false
        });
      })
      .catch(() => {
        this.setState({
          searching: false
        });
      });
  }

  render() {
    const { categories, helps, error } = this.props;
    const { query, searching, fieldError } = this.state;
    return (
      <SearchView
        categories={categories}
        query={query}
        searching={searching}
        helps={helps}
        error={error}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        fieldError={fieldError}
      />
    );
  }
}

const mapStateToProps = ({ categories, search: { error, helps } }) => ({
  categories,
  helps,
  error
});

const mapDispatchToProps = {
  search, setSearchResult
};

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  helps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  search: PropTypes.func.isRequired,
  setSearchResult: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired
};

Search.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
