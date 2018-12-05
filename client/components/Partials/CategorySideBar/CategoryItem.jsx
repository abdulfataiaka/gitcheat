import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryItem = ({ id, name, active }) => (
  <div className="category">
    <Link to={`/category/${id}`}>
      <span style={{ color: `${active ? 'green' : ''}` }}>
        <i className="fas fa-layer-group" />
      </span>
      <span>{name}</span>
    </Link>
  </div>
);

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default CategoryItem;
