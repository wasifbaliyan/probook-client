import Login from "./pages/Login";

import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/profile/:id">
        <Layout>
          <Profile />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/posts/:id">
        <Layout>
          <PostDetails />
        </Layout>
      </PrivateRoute>
      <PrivateRoute exact path="/">
        <Layout>
          <Home />
        </Layout>
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
