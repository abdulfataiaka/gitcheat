import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Banner from './Banner';
import HomeBase from './HomeBase';
import { fetchCategories } from '../../thunks/categoryThunk';

/**
 *
 *
 * @description Home Component
 *
 * @returns { JSX }
 */
const Home = ({ categories, categoriesFetch }) => (
  <main id="fill">
    <Banner />
    <HomeBase
      categories={categories}
      loading={categoriesFetch.loading}
      error={categoriesFetch.error}
    />
  </main>
);

const mapStateToProps = ({ categories, global: { categoriesFetch } }) => ({
  categories,
  categoriesFetch
});

const mapDispatchToProps = {
  fetchCategories
};

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categoriesFetch: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
