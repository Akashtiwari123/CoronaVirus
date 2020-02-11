import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home/Home";
import Layout from "./component/Layout/Layout";
import Login from "./container/Login";
import Registration from "./container/Registration/Registration";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route
              path="/home"
              exact
              strict
              render={props => <Home {...props} />}
            />
            <Route
              path="/registration"
              exact
              strict
              render={props => <Registration {...props} />}
            />
            <Route path="/" exact component={Login} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
