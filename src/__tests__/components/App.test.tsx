import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Dashboard title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/i, { selector: 'h1'});
  expect(linkElement).toBeInTheDocument();
});


