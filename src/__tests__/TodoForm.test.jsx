import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('renders TodoForm component', () => {
  const { getByPlaceholderText, getByText } = render(<TodoForm />);

  const inputElement = getByPlaceholderText('Add todo');
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });

  const buttonElement = getByText('Add');
  fireEvent.click(buttonElement);

  expect(inputElement.value).toBe('');
});
