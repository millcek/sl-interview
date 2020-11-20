import React from 'react';
import { render, screen } from '@testing-library/react';
import DataComponent from './DataComponent';

test('renders children', () => {
  const content = "inside content";
  render((
    <DataComponent data={1}>
      {content}
    </DataComponent>
  ));
  const contentElement = screen.getByText(content);
  expect(contentElement).toBeInTheDocument();
});

test('renders spinner', () => {
  render((
    <DataComponent data={undefined}>
    </DataComponent>
  ));
  const spinnerElement = screen.getByTestId('spinner');
  expect(spinnerElement).toBeInTheDocument();
});

test('renders error', () => {
  const error = 'error text';
  render((
    <DataComponent data={undefined} error={error}>
    </DataComponent>
  ));
  const spinnerElement = screen.getByText(error);
  expect(spinnerElement).toBeInTheDocument();
});