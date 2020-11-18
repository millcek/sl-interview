import React from 'react';
import UserList from './components/UserList';
import { BrowserRouter, Route } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import PostDetail from './components/PostDetail';
import { Container, Row, Col } from 'react-bootstrap';

function Column(props: { children?: React.ReactNode }) {
  return props.children ? (
    <Col
      xl={4}
      lg={6}
      sm={12}
    >
      {props.children}
    </Col>
  ) : null;
}

function App() {
  return (
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
              path="/users/:userId"
              component={UserList}
            />
          </Column>
          <Column>
            <Route
              path="/users/:userId/posts/:postId"
              component={UserDetail}
            />
            <Route
              exact
              path="/users/:userId"
              component={UserDetail}
            />
          </Column>
          <Column>
            <Route
              path="/users/:userId/posts/:postId"
              component={PostDetail}
            />
          </Column>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
