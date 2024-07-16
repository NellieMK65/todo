import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

const mockTodos = [
  { id: 1, name: 'Test Todo 1', completed: false },
  { id: 2, name: 'Test Todo 2', completed: true },
];

test('renders TodoList component', () => {
  const { getByText } = render(<TodoList todos={mockTodos} />);
  expect(getByText('Test Todo 1')).toBeInTheDocument();
  expect(getByText('Test Todo 2')).toBeInTheDocument();
});
