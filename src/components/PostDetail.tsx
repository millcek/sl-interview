import React from 'react';
import styled from '@emotion/styled'
import { useComments, usePost, useUser } from '../hooks';
import { Link, useRouteMatch } from 'react-router-dom';
import List from './List';
import { Comment } from '../api';
import DataComponent from './DataComponent';

type RouteParams = {
  postId: string;
  userId: string;
};

const Title = styled.div`
  font-size: 1.6em;
`;

const Subtitle = styled.div`
  font-size: 1.2em;
`;

export default function PostDetail() {

  const match = useRouteMatch<RouteParams>();
  const postId = Number(match.params.postId);
  const { post, error: postError } = usePost(postId);
  const { user, error: userError = postError } = useUser(post?.userId);
  const { comments, error = userError } = useComments(postId);
  return (
    <DataComponent
      data={user && post && comments}
      error={error}
    >
      <div>
        <Title>
          {post?.title}
        </Title>
        <Subtitle>
          <Link to={`/users/${user?.id}`}>
            {user?.name}
          </Link>
        </Subtitle>
        <List<Comment>
          onClick={() => null}
          data={comments}
          descriptor={[{
            key: 'name',
            title: 'Name'
          }]}
        />
      </div>
    </DataComponent>
  );
}