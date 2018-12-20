import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import { categories } from '../__mocks__/global';

import AuthBoxView from '../../components/AuthBox/View';
import CategoryView from '../../components/Category/CategoryView';
import CategoryList from '../../components/Category/CategoryList/Index';
import Banner from '../../components/Home/Banner';
import HomeBase from '../../components/Home/HomeBase';
import NotFound from '../../components/NotFound/Index';
import SearchView from '../../components/Search/SearchView';

const defaultProps = {
  authBoxView: {
    closeDrawer: jest.fn(),
    show: true,
    loginInProgress: false,
    onSubmit: jest.fn(),
    error: null,
    onChange: jest.fn(),
    email: 'email@email.com',
    password: 'password'
  },

  categoryView: {
    helps: [],
    categories: [...categories],
    category: { ...categories[0] },
    helpsFetch: {
      loading: false,
      error: false
    }
  },

  categoryList: {
    helps: [],
    category: { ...categories[0] },
    helpsFetch: {
      loading: false,
      error: false
    }
  },

  homeBase: {
    categories: [...categories],
    loading: false,
    error: false
  },

  searchView: {
    categories: [...categories],
    helps: [],
    searching: false,
    onSubmit: jest.fn(),
    onChange: jest.fn(),
    fieldError: false,
    error: false
  }
};

const mountComponentA = (Component, props) => mount(
  <Component {...props} />
);

const mountComponentB = (Component, props) => mount(
  <BrowserRouter>
    <Component {...props} />
  </BrowserRouter>
);

export const authBoxView = (props = {}) => {
  const allProps = {
    ...defaultProps.authBoxView,
    ...props
  };

  return {
    wrapper: mountComponentA(AuthBoxView, allProps),
    props: allProps
  };
};

export const categoryView = (props = {}) => {
  const allProps = {
    ...defaultProps.categoryView,
    ...props
  };

  return {
    wrapper: mountComponentB(CategoryView, allProps),
    props: allProps
  };
};


export const categoryList = (props = {}) => {
  const allProps = {
    ...defaultProps.categoryList,
    ...props
  };

  return {
    wrapper: mountComponentA(CategoryList, allProps),
    props: allProps
  };
};

export const homeBanner = () => mountComponentB(Banner, {});

export const notFound = () => mountComponentB(NotFound, {});

export const homeBase = (props = {}) => {
  const allProps = {
    ...defaultProps.homeBase,
    ...props
  };

  return {
    wrapper: mountComponentB(HomeBase, allProps),
    props: allProps
  };
};

export const searchView = (props = {}) => {
  const allProps = {
    ...defaultProps.searchView,
    ...props
  };

  return {
    wrapper: mountComponentB(SearchView, allProps),
    props: allProps
  };
};
