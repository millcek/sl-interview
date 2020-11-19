import styled from '@emotion/styled';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useComment } from '../hooks';
import { colors } from '../styles';
import DataComponent from './DataComponent';
import TextBox from './TextBox';
import Title from './Title';

const Email = styled.a`
  color: ${colors.text.primary};
`;

export default function CommentDetail() {
  const { params } = useRouteMatch<{ commentId: string }>();
  const id = Number(params.commentId);
  const idError = id ? undefined : 'Wrong comment ID';
  const { comment, error = idError } = useComment(id);
  return (
    <DataComponent
      data={comment}
      error={error}
    >
      <Title>
        {comment?.name}
      </Title>
      <TextBox>
        <Email href={'mailto:' + comment?.email}>
          {comment?.email}
        </Email>
      </TextBox>
      <TextBox>
        {comment?.body}
      </TextBox>
    </DataComponent>
  );
}