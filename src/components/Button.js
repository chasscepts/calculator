import PropTypes from 'prop-types';
import React from 'react';

const buttonStyles = (color, wide) => ({
  flex: wide ? '0 0 50%' : '0 0 25%',
  backgroundColor: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',
  border: '2px solid gray',
  fontWeight: 'bold',
  fontSize: '24px',
});

export default function Button({
  name, color, wide, clickHandler,
}) {
  function handleClick() {
    clickHandler(name);
  }

  return (
    <button type="button" style={buttonStyles(color, wide)} onClick={handleClick}><span>{name}</span></button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#ddd',
  wide: false,
};
