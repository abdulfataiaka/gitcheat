import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Status from '../Partials/Status';

/**
 *
 *
 * @description HomeBase Component
 *
 * @returns { JSX }
 */
class HomeBase extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectView = () => {
    const { categories, error, loading } = this.props;

    if (loading) {
      return (
        <Status
          imageType="loading"
          baseText="Loading Categories"
        />
      );
    }

    if (error) {
      return (
        <Status
          imageType="error"
          baseText="Error occured while loading categories"
        />
      );
    }

    if (!categories.length) {
      return (
        <Status
          imageType="empty"
          baseText="There are no categories yet"
        />
      );
    }

    return (
      categories.map(({ _id, name }) => (
        <Link to={`/category/${_id}`} key={_id}>
          <span>{name}</span>
        </Link>
      ))
    );
  }

  render() {
    return (
      <div id="help-about">
        <div className="pgalign">
          <div className="row">
            <div className="col-9">
              <div className="heading">
                HELP CATEGORIES
              </div>

              <div id="help-categ-tags" className="clearfix">
                { this.selectView() }
              </div>
            </div>

            <div className="col-3">
              <div id="author" className="clearfix">
                <img src="/public/images/owner.jpg" alt="author" />

                <div>
                  <span>
                    Developer
                    <i className="fas fa-star" />
                  </span>
                  <span>Abdulfatai Aka</span>
                </div>
              </div>

              <p>
                Has this platform helped you in any way? Provide us with feedback by
                reacting using the like and dislike buttons below.
              </p>

              <div id="reactions">
                <button type="button">
                  <i className="fas fa-thumbs-up" />
                  <span>Like</span>
                  <em>10</em>
                </button>

                <button type="button">
                  <i className="fas fa-thumbs-up" />
                  <span>Dislike</span>
                  <em>10</em>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeBase.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default HomeBase;
