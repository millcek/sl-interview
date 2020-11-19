import React from 'react';
import styled from '@emotion/styled'
import { css, cx } from '@emotion/css';
import { colors } from '../styles';

const Table = styled.table`
  padding: 8px;
  width: 100%;
  border-spacing: 0;
  font-weight: 500;
`;

const Row = styled.tr`
`;

const row = css`
  color: ${colors.text.secondary};
  :not(:first-of-type) {
    color: ${colors.text.primary}; 
    -webkit-box-shadow: 2px 2px 5px 0px #ccc; 
    box-shadow: 2px 2px 5px 0px #ccc;
    background: ${colors.background.default};
    transition: .2s background-color;

    :hover {
      background: ${colors.background.hover};
      cursor: pointer;
    }
  }
`;

const active = css`
  :not(:first-of-type) {
    background-color: ${colors.background.active};
    color: #fff;
    pointer-events: none;
    
    :hover {
      background: ${colors.background.active};
    }
  }
`;

const Cell = styled.td`
  padding: 8px 0;
  :last-child {
    text-align: right;
    padding-right: 16px;
  }
  :first-of-type {
    text-align: left;
    padding-left: 16px;
  }
`;

type Descriptor<T> = {
  key?: keyof T;
  render?(item: T): React.ReactNode;
  title: string;
}[];

type Props<T> = {
  data?: T[];
  descriptor: Descriptor<T>;
  isActive?(item: T): boolean;
  onClick(item: T): void;
};

export default function List<T>(props: Props<T>) {
  return (
    <Table>
      <tbody>
        <Row className={row}>
          {props.descriptor.map((descItem, index) => (
            <Cell key={index}>
              {descItem.title}
            </Cell>
          ))}
        </Row>
        {props.data?.map?.(renderRow)}
      </tbody>
    </Table>
  );

  function renderRow(item: T, index: number) {
    return (
      <Row
        key={index}
        onClick={() => props.onClick(item)}
        className={
          cx( 
            row,
            props.isActive?.(item) && active
          )
        }
      >
        {props.descriptor.map((descItem, index) => (
          <Cell key={index}>
            {descItem.render?.(item) || (descItem.key && item[descItem.key])}
          </Cell>
        ))}
      </Row>
    );
  }
}