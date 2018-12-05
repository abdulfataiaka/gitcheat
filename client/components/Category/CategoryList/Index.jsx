import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HelpItem from '../../Partials/HelpItem/Index';
import Status from '../../Partials/Status';

/**
 *
 *
 * @description CategoryList Component
 *
 * @returns { JSX }
 */
class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectView = () => {
    const {
      helps,
      helpsFetch: { loading, error }
    } = this.props;

    if (loading) {
      return (
        <Status
          imageType="loading"
          baseText="Loading Available Helps"
        />
      );
    }

    if (error) {
      return (
        <Status
          imageType="error"
          baseText="Error occured while loading helps"
        />
      );
    }

    if (!helps.length) {
      return (
        <Status
          imageType="empty"
          baseText="There are no helps in this category yet"
        />
      );
    }

    return helps.map((help, index) => (
      <HelpItem
        key={help._id}
        first={index === 0}
        help={help}
      />
    ));
  }

  render() {
    const { category } = this.props;
    return (
      <div id="category-container">
        <h1 id="category-title">
          { category.name }
        </h1>

        <div id="help-lists">
          { this.selectView() }
        </div>
      </div>
    );
  }
}

CategoryList.propTypes = {
  category: PropTypes.shape({}).isRequired,
  helps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  helpsFetch: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
  }).isRequired
};

export default CategoryList;
