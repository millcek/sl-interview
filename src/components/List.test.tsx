import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';
import { colors } from '../styles';

test('renders data', () => {
  const data = ['foo', 'bar', 'baz'];
  render((
    <List<string>
      onClick={() => null}
      descriptor={[{
        title: "title",
        render: item => item
      }]}
      data={data} />
  ));
  data.forEach(item => {
    const element = screen.getByText(item);
    expect(element).toBeInTheDocument();
  })
});

test('renders captions', () => {
  const data = ['foo', 'bar', 'baz'];
  const title = "title";
  render((
    <List<string>
      onClick={() => null}
      descriptor={[{
        title,
        render: item => item
      }]}
      data={data} />
  ));
  const element = screen.getByText(title);
  expect(element).toBeInTheDocument();
});

test('renders active', () => {
  const data = ['foo', 'bar', 'baz'];
  const title = "title";
  const active = data[1];
  render((
    <List<string>
      onClick={() => null}
      isActive={item => item === active}
      descriptor={[{
        title,
        render: item => item
      }]}
      data={data} />
  ));
  const element = screen.getByText(active);
  expect(element.parentNode).toHaveStyle(`background: ${colors.background.active};`);
});

test('onclick works', () => {
  const data = ['foo', 'bar', 'baz'];
  const title = "title";
  const active = data[1];
  let clickCounter = 0;
  render((
    <List<string>
      onClick={() => clickCounter++}
      descriptor={[{
        title,
        render: item => item
      }]}
      data={data} />
  ));
  const element = screen.getByText(active);
  fireEvent.click(element);
  expect(clickCounter).toBe(1);
});