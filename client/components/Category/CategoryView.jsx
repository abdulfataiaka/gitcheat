import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList/Index';
import CategorySideBar from '../Partials/CategorySideBar/Index';

/**
 *
 *
 * @description Help Component
 *
 * @returns { JSX }
 */
const CategoryView = ({
  helps,
  categories,
  category,
  helpsFetch
}) => (
  <main id="fix">
    <div id="category" className="ct-view-one">
      <div className="pgalign">
        { category && (
          <div className="row">
            <div className="col-9">
              <CategoryList
                helps={helps}
                helpsFetch={helpsFetch}
                category={category}
              />
            </div>

            <div className="col-3">
              <CategorySideBar
                categories={categories}
                categoryId={category._id}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </main>
);

CategoryView.propTypes = {
  helps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  helpsFetch: PropTypes.shape({}).isRequired,
  category: PropTypes.shape({})
};

CategoryView.defaultProps = {
  category: null
};

export default CategoryView;
