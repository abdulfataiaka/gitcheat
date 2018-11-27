import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @description NotFound Component
 *
 * @returns { JSX }
 */
const NotFound = () => (
  <div className="test">
    Page requested does not exist

    <div className="link text-center">
      <Link to="/">Homepage</Link>
    </div>
  </div>
);

export default NotFound;
