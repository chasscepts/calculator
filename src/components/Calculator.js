import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import AppHeader from './AppHeader';

const styles = {
  container: {
    width: '700px',
    margin: 'auto',
  },
  content: {
    display: 'flex',
    paddingBottom: '30px',
  },
};

export function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const state = calculate({ total, next, operation }, buttonName);
    setTotal(state.total);
    setNext(state.next);
    setOperation(state.operation);
  };

  return (
    <div style={styles.container}>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

const p = "Now let's do some Math!";

export default function Page() {
  return (
    <>
      <AppHeader />
      <div style={styles.content} className="content">
        <p>{p}</p>
        <Calculator />
      </div>
    </>
  );
}
