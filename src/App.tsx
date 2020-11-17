import React from 'react';
import UserList from './components/UserList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import PostDetail from './components/PostDetail';
import styled from '@emotion/styled';

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;

const Sidebar = styled.div`
  overflow: auto;
  height: 100%;
  height: 100%;
  border-right: 1px solid #ccc;
`;

const Main = styled.div`
  overflow: auto;
  height: 100%;
`;

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={UserList}
        />
        <Sidebar>
          <Route
            path="/users/:userId"
            component={UserList}
          />
        </Sidebar>
        <Main>
          <Route
            path="/users/:userId/posts/:postId"
            component={UserDetail}
          />
          <Route
            exact
            path="/users/:userId"
            component={UserDetail}
          />
          <Route
            path="/users/:userId/posts/:postId"
            component={PostDetail}
          />
        </Main>
      </BrowserRouter>
    </Root>
  );
}

export default App;
