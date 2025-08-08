import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Counter increments correctly', () => {
  render(<App />);
  const button = screen.getByText('Increment');
  fireEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('Lazy-loaded component appears when button is clicked', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('Load Settings'));
  const lazyComponent = await screen.findByText('Settings Loaded!');
  expect(lazyComponent).toBeInTheDocument();
});
