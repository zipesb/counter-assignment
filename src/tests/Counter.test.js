// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';

// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText("Counter");
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId("count");
  const incrementBtn = screen.getByText("+");
  fireEvent.click(incrementBtn);
  expect(count).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const count = screen.getByTestId("count");
  const decrementBtn = screen.getByText("-");
  fireEvent.click(decrementBtn);
  expect(count).toHaveTextContent("-1");
});
