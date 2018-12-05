import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

/**
 *
 *
 * @description CategorySideBar Component
 *
 * @returns { JSX }
 */
const CategorySideBar = ({ categories, categoryId }) => (
  <div id="help-sidebar">
    <h1>Categories</h1>

    <div id="category-items">
      {
        categories.map((category, index) => (
          <CategoryItem
            key={category._id}
            id={category._id}
            number={index + 1}
            name={category.name}
            active={categoryId === category._id}
          />
        ))
      }
    </div>
  </div>
);

CategorySideBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categoryId: PropTypes.number
};

CategorySideBar.defaultProps = {
  categoryId: undefined
};

export default CategorySideBar;
