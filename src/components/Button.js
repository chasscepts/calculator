import PropTypes from 'prop-types';
import React from 'react';

function Button({ name, clickHandler }) {
  function handleClick() {
    clickHandler(name);
  }

  return (
    <button type="button" onClick={handleClick}><span>{name}</span></button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
