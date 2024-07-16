import React from 'react';
import { render } from '@testing-library/react';
import LoadingIndicator from '../components/LoadingIndicator';

test('renders LoadingIndicator component', () => {
  const { getByText } = render(<LoadingIndicator />);
  expect(getByText('Loading...')).toBeInTheDocument();
});
