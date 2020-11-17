import React from 'react';
import { User, Comment, Post } from '../api';

function useFetcher<T>(url?: string) {
  const [error, setError] = React.useState<string>();
  const [data, setData] = React.useState<T>();
  React.useEffect(
    () => {
      if (url) {
        setData(undefined);
        fetch('https://jsonplaceholder.typicode.com/' + url)
          .then(response => response.json())
          .then(setData)
          .then(() => setError(undefined))
          .catch(error => setError(error.message))
      }
    },
    [url]
  );
  return {
    data,
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