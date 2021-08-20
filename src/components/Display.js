import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  width: '100%',
  height: '100px',
  padding: '0 10px',
  backgroundColor: 'gray',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '48px',
  textAlign: 'right',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export default function Display({ result }) {
  return (
    <div style={styles}><span>{result}</span></div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
