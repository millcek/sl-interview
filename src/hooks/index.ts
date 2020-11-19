import React from 'react';
import { User, Comment, Post } from '../api';

const data: { [url: string]: any } = {};

function useFetcher<T>(url?: string) {
  const [error, setError] = React.useState<string>();
  const [stateData, setStateData] = React.useState<T>();
  React.useEffect(
    () => {
      if (url) {
        if (data[url]) {
          setError(undefined);
          setStateData(data[url]);
        } else {
          setStateData(undefined);
          fetch('https://jsonplaceholder.typicode.com/' + url)
            .then(response => response.json())
            .then(newData => {
              setStateData(newData);
              setError(undefined);
              data[url] = newData;
            })
            .catch(error => {
              setError(error.message);
            })
            ;
        }
      }
    },
    [url]
  );

  return {
    data: stateData,
    error
  };
}

export function useUsers() {
  const { data: users, error } = useFetcher<User[]>('users');
  return {
    users,
    error
  };
}

export function useUser(id?: number) {
  const url = id ? 'users/' + id : undefined;
  const { data: user, error } = useFetcher<User>(url);
  return {
    user,
    error
  };
}

export function usePosts(userId: number) {
  const { data: posts, error } = useFetcher<Post[]>('posts?userId=' + userId);
  return {
    posts,
    error
  };
}

export function usePost(id: number) {
  const { data: post, error } = useFetcher<Post>('posts/' + id);
  return {
    post,
    error
  };
}

export function useComments(postId: number) {
  const { data: comments, error } = useFetcher<Comment[]>('comments?postId=' + postId);
  return {
    comments,
    error
  };
}

export function useComment(commentId: number) {
  const { data: comment, error } = useFetcher<Comment>('comments/' + commentId);
  return {
    comment,
    error
  };
}