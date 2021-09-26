import Counter from 'components/Counter';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from 'test/test-utils';

afterEach(cleanup);

it('increments and decrements the counter by 1', () => {
  render(<Counter />);

  const counterDisplay = screen.getByTestId('counter');
  const incrementBtn = screen.getByRole('button', { name: /\+/i });
  const decrementBtn = screen.getByRole('button', { name: /-/i });

  expect(counterDisplay).toHaveTextContent(/0/i);

  userEvent.click(incrementBtn);

  expect(counterDisplay).toHaveTextContent(/1/i);

  userEvent.click(decrementBtn);

  expect(counterDisplay).toHaveTextContent(/0/i);
});
