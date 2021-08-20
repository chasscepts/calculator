import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.busy = false;
  }

  handleClick = (buttonName) => {
    if (this.busy) return;
    this.busy = true;
    const state = calculate(this.state, buttonName);
    this.setState(() => {
      this.busy = false;
      return state;
    });
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <Display result={next || total || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
