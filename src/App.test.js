import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { screen } from '@testing-library/react';

test('renders burger builder title', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/burger builder/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
