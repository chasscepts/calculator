import operate, { INFINITY_ERROR } from './operate';

/**
 * perform calculation on a calculator data object
 * @param {Object} data calculator data object
 * @param {Number} data.total current total
 * @param {Number} data.next next number
 * @param {string} data.operation operation to perform
 * @param {string} buttonName name of button
 */
export default function calculate(data, buttonName) {
  const result = { ...data };
  if (result.total === INFINITY_ERROR && buttonName !== 'AC') {
    return result;
  }
  switch (buttonName) {
    case '+/-':
      if (result.next) {
        result.next = `${result.next * -1}`;
      }
      break;
    case '%':
      if (result.next) {
        result.next = operate(result.total, result.next, buttonName);
      }
      break;
    case '+':
    case '-':
    case 'X':
    case '÷':
      if (!result.next && result.total) {
        result.next = result.total;
      }
      if (result.next !== null) {
        result.total = result.next;
        result.next = null;
        result.operation = buttonName;
      }
      break;
    case '=': {
      if (result.operation) {
        const total = result.total || 0;
        const next = result.next || 0;
        result.total = operate(total, next, result.operation);
        result.next = null;
        result.operation = null;
      } else {
        result.total = result.next;
        result.next = null;
        result.operation = null;
      }
      break;
    }
    case 'AC':
      result.next = null;
      result.total = null;
      result.operation = null;
      break;
    default: {
      let prev = result.next;
      if (!prev || prev === '0') {
        prev = '';
      }
      result.next = `${prev}${buttonName}`;
      break;
    }
  }
  return result;
}
