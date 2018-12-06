/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 *
 *
 * @description Banner Component
 *
 * @returns { JSX }
 */
const Banner = () => (
  <div id="banner">
    <div className="pgalign">
      <div className="row">
        <div className="col-5">
          <p className="git-about">
            Git is a <Link to="http://google.com">free and open source</Link>&nbsp;
            distributed <Link to="http://google.com">version control system</Link>&nbsp;
            designed to handle everything from small to very large projects.
          </p>

          <p className="git-about">
            Git is easy to learn and has a tiny footprint with lightning fast
            performance. So this app has be created to give you easy access to
            all git commands and operations.
          </p>
        </div>
        <div className="col-7 text-right">
          <img src="/public/images/git-img.png" alt="git flow" />
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
