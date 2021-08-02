import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('it works react component', () => {
  render(<App />);

  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
