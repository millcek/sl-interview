import React from 'react';
import UserList from './components/UserList';
import { BrowserRouter, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import PostDetail from './components/PostDetail';
import { Container, Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import CommentDetail from './components/CommentDetail';

type ColumnProps = {
  children?: React.ReactNode;
  title?: string;
};

const Root = styled.div`
  background: #F9F8F9;
  height: 100%;
`;

function Column({ children, title }: ColumnProps) {
  return (
    <Col
      // xl={4}
      lg={6}
      sm={12}
    >
      {children}
    </Col>
  );
}

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Container>
          <Row>
            <Route
              exact
              path="/"
              component={UserList}
            />
            <Column>
              <Route
                path="/user/:userId"
                component={UserList}
              />
            </Column>
            <Column title="User detail">
              <Route
                path="/user/:userId/post/:postId"
                component={UserDetail}
              />
              <Route
                exact
                path="/user/:userId"
                component={UserDetail}
              />
            </Column>
            <Column>
              <Route
                exact
                path="/user/:userId/post/:postId"
                component={PostDetail}
              />
              <Route
                path="/user/:userId/post/:postId/comment/:commentId"
                component={PostDetail}
              />
            </Column>
            <Column>
              <Route
                path="/user/:userId/post/:postId/comment/:commentId"
                component={CommentDetail}
              />
            </Column>
          </Row>
        </Container>
      </BrowserRouter>
    </Root>
  );
}

export default App;
