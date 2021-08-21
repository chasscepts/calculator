import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentWrapper from '../test_helpers/ComponentWrapper';
import Calculator, { CalculatorApp } from '../Calculator';
import { INFINITY_ERROR } from '../../logic/operate';

it('matches snapshot', () => {
  const tree = renderer
    .create(<ComponentWrapper component={Calculator} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Calculator', () => {
  beforeEach(() => {
    render(<CalculatorApp />);
  });

  it('has the display component', () => {
    expect(screen.getByRole('log')).toBeInTheDocument();
  });

  it('has zero button', () => {
    expect(screen.getAllByText('0').length).toBe(2); //  also shows 0 initially
  });

  it('displays all other buttons', () => {
    const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'X', '÷', '+/-', '%', '=', '.', 'AC'];
    labels.forEach((label) => expect(screen.getByText(label)).toBeInTheDocument());
  });

  it('can type a sequence of numbers', async () => {
    await userEvent.click(screen.getByText('4'));
    const elementWithText4 = await screen.findAllByText('4');
    expect(elementWithText4).toHaveLength(2); // Display and button 4
    await userEvent.click(screen.getByText('5'));
    expect(screen.getByText('45')).toBeInTheDocument(); // Display will show 45
  });

  it('can perform addition', async () => {
    await userEvent.click(screen.getByText('7'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByText('16')).toBeInTheDocument(); // 7 + 9 = 16
  });

  it('can perform subtraction', async () => {
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByText('11')).toBeInTheDocument(); // 13 - 2 = 11
  });

  it('can perform multiplication', async () => {
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('X'));
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByText('30')).toBeInTheDocument(); // 5 * 6 = 30
  });

  it('can perform division', async () => {
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('÷'));
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByText('12')).toBeInTheDocument(); // 96 / 8 = 12
  });

  it('can convert to percentage', async () => {
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('%'));
    expect(screen.getByText('0.05')).toBeInTheDocument();
  });

  it('toggles the sign of a number', async () => {
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('+/-'));
    expect(screen.getByText('-15')).toBeInTheDocument();
    await userEvent.click(screen.getByText('+/-'));
    expect(screen.getByText('15')).toBeInTheDocument();
  });

  describe('handles division by zero', () => {
    beforeEach(async () => {
      await userEvent.click(screen.getByText('5'));
      await userEvent.click(screen.getByText('÷'));
      await userEvent.click(screen.getByText('0'));
      await userEvent.click(screen.getByText('='));
    });

    it('displays error on division by zero', () => {
      expect(screen.getByText(INFINITY_ERROR)).toBeInTheDocument();
    });

    it('requires clearing error before accepting further inputs', async () => {
      const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'X', '÷', '+/-', '%', '=', '.'];
      const label = labels[Math.floor(Math.random() * labels.length)];
      await userEvent.click(screen.getByText(label));
      expect(screen.getByText(INFINITY_ERROR)).toBeInTheDocument();
    });

    it("clears error when 'AC' button is clicked", async () => {
      await userEvent.click(screen.getByText('AC'));
      expect(screen.queryByText(INFINITY_ERROR)).toBeNull();
      expect(screen.getAllByText('0')).toHaveLength(2);
      const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const label = labels[Math.floor(Math.random() * labels.length)];
      await userEvent.click(screen.getByText(label));
      expect(screen.getAllByText(label)).toHaveLength(2);
    });
  });
});
