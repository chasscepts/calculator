import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
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
    <>
      <Display result={next || total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}
