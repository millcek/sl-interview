import React from 'react';
import { usePosts, useUser } from '../hooks';
import { useHistory, useRouteMatch } from 'react-router-dom';
import List from './List';
import { Post } from '../api';
import DataComponent from './DataComponent';
import styled from '@emotion/styled';
import { colors } from '../styles';
import { css } from '@emotion/css';
import Title from './Title';

const Table = styled.table`
  margin: 8px auto;
  border-spacing: 0;
  width: 100%;
`;

const HeadCell = styled.td`
  color: ${colors.text.secondary};
  text-align: right;
`;

const Cell = styled.td`
  color: ${colors.text.primary};
  background: ${colors.background.default};
  -webkit-box-shadow: 2px 2px 5px 0px #ccc; 
  box-shadow: 2px 2px 5px 0px #ccc;
`;

const cell = css`
  padding: 8px 16px;
  font-weight: 500;
`;

const Hyperlink = styled.a`
  color: ${colors.text.primary};
`;

export default function UserDetail() {
  const { params } = useRouteMatch<{ userId: string, postId: string }>();
  const userId = Number(params.userId);
  const userIdError = userId ? undefined : 'Wrong user ID';
  const { user, error: userError = userIdError } = useUser(userId);
  const { posts, error = userError } = usePosts(userId);
  const history = useHistory();
  return (
    <DataComponent
      data={user && posts}
      error={error}
    >
      <Title>User detail</Title>
      <Table>
        <tbody>
          <Row title="Name" value={user?.name} />
          <Row title="Company" value={user?.company.name} />
          <Row title="City" value={user?.address.city} />
          <Row
            title="E-mail"
            value={<Hyperlink href={`mailto:${user?.email}`}>{user?.email}</Hyperlink>}
          />
          <Row
            title="Phone"
            value={<Hyperlink href={`tel:${user?.phone}`}>{user?.phone}</Hyperlink>}
          />
        </tbody>
      </Table>
      <List<Post>
        isActive={item => String(item.id) === params.postId}
        onClick={post => history.push(`/user/${userId}/post/${post.id}`)}
        data={posts}
        descriptor={[{
          key: 'title',
          title: 'Posts'
        }]}
      />
    </DataComponent>
  );
}

type RowProps = {
  title: string;
  value?: string | React.ReactNode;
};

function Row(props: RowProps) {
  return (
    <tr>
      <HeadCell className={cell}>
        {props.title}
      </HeadCell>
      <Cell className={cell}>
        {props.value}
      </Cell>
    </tr>

  )
}