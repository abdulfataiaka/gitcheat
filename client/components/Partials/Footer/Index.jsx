import React from 'react';

/**
 *
 *
 * @description Footer Component
 *
 * @returns { JSX }
 */
const Footer = () => (
  <div id="footer">
    <div className="pgalign">
      <div className="row">
        <div className="col-6">
          <span className="ftext">heroku.com</span>
          <span className="ftext">Blogs</span>
          <span className="ftext">Careers</span>
          <span className="ftext">Documentation</span>
        </div>
        <div className="col-6 text-right">
          <span className="ftext right">Terms of Service</span>
          <span className="ftext right">Privacy</span>
          <span className="ftext right">Cookies</span>
          <span className="ftext right">&copy; 2018 Andela.com</span>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
