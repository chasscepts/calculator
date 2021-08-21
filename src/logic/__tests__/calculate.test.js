import calculate from '../calculate';
import { INFINITY_ERROR } from '../operate';

describe('calculate', () => {
  it('returns single digit next when next is null', () => {
    expect(calculate({ data: null, next: null, operation: null }, '1').next).toBe('1');
  });

  it('appends value to the end of next when it is not null', () => {
    expect(calculate({ data: null, next: '123', operation: null }, '4').next).toBe('1234');
  });

  it('does not append 0 to next when it is 0', () => {
    expect(calculate({ data: null, next: '0', operation: null }, '0').next).toBe('0');
  });

  it('toggles the sign of next when buttonName is +/-', () => {
    expect(calculate({ data: null, next: '123', operation: null }, '+/-').next).toBe('-123');
    expect(calculate({ data: null, next: '-123', operation: null }, '+/-').next).toBe('123');
  });

  it('calculates the percentage of a number', () => {
    expect(calculate({ data: null, next: '50', operation: null }, '%').next).toBe('0.5');
  });

  it('correctly performs mathematical operations on numbers', () => {
    [
      { operation: '+', result: '35' },
      { operation: '-', result: '25' },
      { operation: 'X', result: '150' },
      { operation: '÷', result: '6' },
    ].forEach((sample) => {
      let data = { total: null, next: null, operation: null };
      data = calculate(data, '3');
      data = calculate(data, '0');
      data = calculate(data, sample.operation);
      data = calculate(data, '5');
      data = calculate(data, '=');
      expect(data.total).toBe(sample.result);
    });
  });

  it('correctly handles division by zero', () => {
    expect(calculate({ total: 10, next: 0, operation: '÷' }, '=').total).toBe(INFINITY_ERROR);
  });
  
  it('AC button resets the state', () => {
    expect(calculate({ total: '1', next: '2', operation: 'X' }, 'AC'))
      .toStrictEqual({ total: null, next: null, operation: null });
  });

  it('= button resets next when operation given', () => {
    expect(calculate({ total: 20, next: 10, operation: 'X' }, '=').next).toBeNull();
  });

  it('= button resets next when operation NOT given', () => {
    expect(calculate({ total: null, next: 10, operation: null }, '=').next).toBeNull();
  });
});
