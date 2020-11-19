import React from 'react';
import { useComments, usePost } from '../hooks';
import { useHistory, useRouteMatch } from 'react-router-dom';
import List from './List';
import { Comment } from '../api';
import DataComponent from './DataComponent';
import Title from './Title';
import TextBox from './TextBox';

type RouteParams = {
  postId: string;
  userId: string;
  commentId?: string;
};

export default function PostDetail() {
  const history = useHistory();
  const { params } = useRouteMatch<RouteParams>();

  const postId = Number(params.postId);
  const userId = Number(params.userId);
  const commentId = Number(params.commentId);

  const idError = postId && userId ? undefined : 'Wrong ID';

  const { post, error: postError = idError } = usePost(postId);
  const { comments, error = postError } = useComments(postId);

  return (
    <DataComponent
      data={post && comments}
      error={error}
    >
      <Title>
        {post?.title}
      </Title>
      <TextBox>
        {post?.body}
      </TextBox>
      <List<Comment>
        onClick={item => history.push(`/user/${userId}/post/${postId}/comment/${item.id}`)}
        isActive={item => item.id === commentId}
        data={comments}
        descriptor={[{
          key: 'name',
          title: 'Comments'
        }]}
      />
    </DataComponent>
  );
}