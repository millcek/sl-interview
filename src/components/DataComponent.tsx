import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../styles';

type Props = {
  children: React.ReactNode;
  data: any;
  error?: string;
};

const Error = styled.div`
  color: ${colors.text.error};
  min-width: 400px;
  min-height: 200px;
  text-align: center;
  font-size: 1.4em;
  margin: 16px;
`;

const Loading = styled.div`
  min-width: 400px;
  min-height: 200px;
  text-align: center;
  color: ${colors.text.primary};
  margin: 16px;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: .25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border .75s linear infinite;
  animation: spinner-border .75s linear infinite;

  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }
`;

export default function DataComponent(props: Props) {
  if (props.error) {
    return (
      <Error>
        <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
        <br />
        {props.error}
      </Error>
    );
  }

  if (props.data) {
    return <>{props.children}</>;
  }

  return (
    <Loading>
      <Spinner />
    </Loading>
  );
}