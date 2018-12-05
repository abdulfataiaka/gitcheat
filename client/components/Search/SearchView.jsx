import React from 'react';
import PropTypes from 'prop-types';
import HelpItem from '../Partials/HelpItem/Index';
import CategorySideBar from '../Partials/CategorySideBar/Index';

/**
 *
 *
 * @description Help Component
 *
 * @returns { JSX }
 */
const SearchView = ({ categories }) => (
  <main id="fix">
    <div id="search" className="ct-view-one">
      <div className="pgalign">
        <div className="row">
          <div className="col-9">
            <div id="search-section">
              <div id="search-form">
                <input
                  type="text"
                  placeholder="Search help by title or keywords"
                />
                <span>
                  {
                    true
                      ? <i className="fa fa-search" />
                      : <img src="/images/bolt.gif" alt="loading" />
                  }
                </span>
              </div>

              <div id="search-heading">
                <h1>
                  <span>3442</span>
                  Matching results
                </h1>
                <div />
              </div>

              <div id="search-result">
                { [1, 2, 3, 4, 5, 6, 7].map((a, index) => (
                  <HelpItem
                    key={a}
                    first={index === 0}
                    help={{
                      _id: 1,
                      title: 'Help title',
                      content: 'Help content',
                      video: null,
                      examples: 'Hello',
                      type: 'cmd'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="col-3">
            <CategorySideBar
              categories={categories}
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);

SearchView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

SearchView.defaultProps = {};

export default SearchView;
