import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setCurrentHelpId,
  fetchCategoryHelps
} from '../../thunks/helpThunk';

import { closeCategoryOverlay } from '../../thunks/categoryThunk';

import CategoryView from './CategoryView';

/**
 *
 *
 * @description Category Component
 *
 * @returns { JSX }
 */
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }

  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    this.updateCategoryPage(id);
  }

  shouldComponentUpdate(nextProps) {
    const { match: { params: { id: prevId } } } = this.props;
    const { match: { params: { id: nextId } } } = nextProps;

    if (prevId !== nextId) {
      this.updateCategoryPage(nextId);
    }

    return true;
  }

  updateCategoryPage = (categoryId) => {
    const {
      categories,
      history
    } = this.props;

    const category = categories.find(categ => `${categ._id}` === `${categoryId}`);
    if (!category) {
      history.push('/');
    } else {
      this.setState({ category });
      this.props.fetchCategoryHelps(categoryId);
    }
  }

  render() {
    const { category } = this.state;

    const {
      helps, categories, helpId,
      categoryOverlayShow, helpsFetch
    } = this.props;

    return (
      <CategoryView
        helps={helps}
        categories={categories}
        helpId={helpId}
        helpsFetch={helpsFetch}
        category={category}
        categoryOverlayShow={categoryOverlayShow}
      />
    );
  }
}

const mapStateToProps = ({
  helps,
  categories,
  global: {
    helpId,
    helpsFetch,
    categoryOverlayShow
  }
}) => ({
  helps,
  categories,
  helpId,
  categoryOverlayShow,
  helpsFetch
});

const mapDispatchToProps = {
  closeCategoryOverlay,
  setCurrentHelpId,
  fetchCategoryHelps
};

Category.propTypes = {
  helps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  helpId: PropTypes.number,
  categoryOverlayShow: PropTypes.string,
  match: PropTypes.shape({}).isRequired,
  fetchCategoryHelps: PropTypes.func.isRequired,
  helpsFetch: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
};

Category.defaultProps = {
  helpId: null,
  categoryOverlayShow: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
