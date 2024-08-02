// src/__tests__/TodoList.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

const mockTodos = [
  { id: 1, name: 'Test Todo 1', completed: false },
  { id: 2, name: 'Test Todo 2', completed: true },
];

test('renders TodoList component', () => {
  const handleComplete = jest.fn();
  const handleDelete = jest.fn();
  const { getByText, getAllByText } = render(
    <TodoList todos={mockTodos} handleComplete={handleComplete} handleDelete={handleDelete} />
  );

  expect(getByText('Test Todo 1')).toBeInTheDocument();
  expect(getByText('Test Todo 2')).toBeInTheDocument();

  const completeButton = getByText('Complete');
  fireEvent.click(completeButton);
  expect(handleComplete).toHaveBeenCalledWith(1);

  const deleteButtons = getAllByText('Delete');
  fireEvent.click(deleteButtons[0]);
  expect(handleDelete).toHaveBeenCalledWith(1);
});
