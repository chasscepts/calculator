import PropTypes from 'prop-types';
import React from 'react';

function Button({ name }) {
  return (
    <button type="button"><span>{name}</span></button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
