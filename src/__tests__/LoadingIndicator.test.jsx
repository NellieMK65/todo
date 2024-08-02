// src/__tests__/LoadingIndicator.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Updated import
import LoadingIndicator from '../components/LoadingIndicator';

test('renders LoadingIndicator component', () => {
  const { getByText } = render(<LoadingIndicator />);
  expect(getByText('Loading...')).toBeInTheDocument();
});
