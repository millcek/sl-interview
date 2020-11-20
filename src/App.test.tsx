import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  const getUserElement = () => screen.getByText(/Leanne Graham/i);
  await waitFor(getUserElement);
  fireEvent.click(getUserElement());

  const getPostElement = () => screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  await waitFor(getPostElement);
  fireEvent.click(getPostElement());

  const getCommentElement = () => screen.getByText('id labore ex et quam laborum');
  await waitFor(getCommentElement);
  fireEvent.click(getCommentElement());

  const getCommentDetailElement = () => screen.getByText('laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium');
  await waitFor(getCommentDetailElement);
});
