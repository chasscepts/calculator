import Big from 'big.js';

export const INFINITY_ERROR = "Infinity [click 'AC' to clear]";

export default function operate(numberOne, numberTwo, operation) {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo).toString();
    case '-':
      return Big(numberOne).minus(numberTwo).toString();
    case 'X':
      return Big(numberOne).times(numberTwo).toString();
    case '÷':
      if (!numberTwo || numberTwo === '0') return INFINITY_ERROR;
      return Big(numberOne).div(numberTwo).toString();
    case '%':
      return Big(numberTwo).div(100).toString();
    default:
      return numberOne;
  }
}
