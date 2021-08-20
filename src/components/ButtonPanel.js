import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const orange = 'orange';

const styles = {
  buttonGroup: {
    width: '100%',
    height: '100px',
    display: 'flex',
  },
};

export default function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div style={styles.buttonGroup}>
        <Button name="AC" clickHandler={clickHandler} />
        <Button name="+/-" clickHandler={clickHandler} />
        <Button name="%" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} color={orange} />
      </div>
      <div style={styles.buttonGroup}>
        <Button name="7" clickHandler={clickHandler} />
        <Button name="8" clickHandler={clickHandler} />
        <Button name="9" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} color={orange} />
      </div>
      <div style={styles.buttonGroup}>
        <Button name="4" clickHandler={clickHandler} />
        <Button name="5" clickHandler={clickHandler} />
        <Button name="6" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} color={orange} />
      </div>
      <div style={styles.buttonGroup}>
        <Button name="1" clickHandler={clickHandler} />
        <Button name="2" clickHandler={clickHandler} />
        <Button name="3" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} color={orange} />
      </div>
      <div style={styles.buttonGroup}>
        <Button name="0" clickHandler={clickHandler} wide />
        <Button name="." clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} color={orange} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
