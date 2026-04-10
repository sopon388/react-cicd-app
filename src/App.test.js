import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});