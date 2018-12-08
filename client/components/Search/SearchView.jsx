import React from 'react';
import PropTypes from 'prop-types';
import HelpItem from '../Partials/HelpItem/Index';
import Status from '../Partials/Status';
import CategorySideBar from '../Partials/CategorySideBar/Index';

/**
 *
 *
 * @description Help Component
 *
 * @returns { JSX }
 */
const SearchView = ({
  categories,
  helps,
  searching,
  onChange,
  onSubmit,
  error,
  fieldError
}) => (
  <main id="fix">
    <div id="search" className="ct-view-one">
      <div className="pgalign">
        <div className="row">
          <div className="col-9">
            <div id="search-section">
              <div
                id="search-form"
                style={{
                  borderColor: `${
                    fieldError
                      ? '#c2175b'
                      : '#E8E8E8'
                  }`
                }}
              >
                <input
                  type="text"
                  placeholder="Search help by title or keywords"
                  onChange={onChange}
                />
                <span>
                  {
                    !searching
                      ? (
                        <button
                          type="button"
                          onClick={onSubmit}
                        >
                          <i className="fa fa-search" />
                        </button>
                      )
                      : <img src="/public/images/bolt.gif" alt="loading" />
                  }
                </span>
              </div>

              <div id="search-heading">
                <h1>
                  <span>{ helps.length }</span>
                  Matching results
                </h1>
                <div />
              </div>

              <div id="search-result">
                {
                  searching
                    ? (
                      <Status
                        imageType="loading"
                        baseText="Searching..."
                      />
                    )
                    : error
                      ? (
                        <Status
                          imageType="error"
                          baseText="Error occured while searching"
                        />
                      )
                      : !helps.length
                        ? (
                          <Status
                            imageType="empty"
                            baseText="No result to display at the moment"
                          />
                        )
                        : (
                          helps.map((help, index) => (
                            <HelpItem
                              key={help._id}
                              first={index === 0}
                              help={help}
                            />
                          ))
                        )
                }
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
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  helps: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  searching: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  fieldError: PropTypes.bool.isRequired
};

SearchView.defaultProps = {};

export default SearchView;
