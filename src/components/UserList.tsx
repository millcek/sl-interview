import React from 'react';
import { useUsers } from '../hooks';
import { useHistory, useRouteMatch } from 'react-router-dom';
import List from './List';
import { User } from '../api';
import styled from '@emotion/styled';
import DataComponent from './DataComponent';

const Svg = styled.svg`
  margin-right: 16px;
  width: 1.8em;
`;

export default function UserList() {
  const { users, error } = useUsers();
  const history = useHistory();
  const { params } = useRouteMatch<{ userId: string }>();
  return (
    <DataComponent
      data={users}
      error={error}
    >
      <List<User>
        data={users}
        onClick={user => history.push(`/users/${user.id}`)}
        isActive={item => String(item.id) === params.userId}
        descriptor={[
          {
            title: '',
            render: () => (
              <Svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </Svg>
            )
          },
          {
            key: 'name',
            title: 'Name'
          },
          {
            render: user => user.company.name,
            title: 'Company'
          }
        ]}
      />
    </DataComponent>
  );
}