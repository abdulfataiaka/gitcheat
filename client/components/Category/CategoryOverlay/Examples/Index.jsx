/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Examples = ({ examples }) => (
  <div id="examples">
    { examples && (
      <div>
        <p>{ examples }: login</p>

        I’m also assuming you can use the command line / console etc. I’m going to be calling it
        the terminal from now on. There’s a difference apparently.<br />

        Go to your terminal and type:

        <div className="code">npm adduser</div>

        You can also use the command:

        <div className="code">npm login</div>

        You’ll get a prompt for your username, password and email. Stick them in there!
      </div>
    )}
  </div>
);

Examples.propTypes = {
  examples: PropTypes.string
};

Examples.defaultProps = {
  examples: null
};

export default Examples;
