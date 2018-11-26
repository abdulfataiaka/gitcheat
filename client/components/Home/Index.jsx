import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @description Home Component
 *
 * @returns { JSX }
 */
const Home = () => (
  <div className="test">
    Welcome to home page

    <div className="link text-center">
      <Link to="/not-found">Not Found</Link>
    </div>
  </div>
);

export default Home;
