import React, { Component } from "react";
import "./App.css";
import "./Layout.css";
import { Route } from "react-router-dom";
import user from "./login.png";
import Home from "./Home";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import logo from "./icons8-virus-96.png";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.username);
    console.log(this.state.password);
  };

  loginHandler = () => {
    if (this.state.username === "admin" && this.state.password === "admin") {
      // this.props.onClickVal();
      return this.props.history.push({
        pathname: "/home",
        state: { user: this.state.username }
      });
    } else {
      alert("Incorrect Credentials.");
    }
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />

          <div className="head">
            <img src={logo} alt="logo" />
            CoronaVirus
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <main>
          <center>
            <form>
              <div className="imgcontainer">
                <img src={user} alt="Avatar" className="avatar" />
              </div>

              <div className="container">
                <label>
                  <b>Username</b>
                </label>
                <input
                  type="text"
                  onChange={event => this.onChangeHandler(event)}
                  placeholder="Enter Username"
                  name="username"
                  required
                />

                <label>
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  onChange={event => this.onChangeHandler(event)}
                  placeholder="Enter Password"
                  name="password"
                  required
                />

                <input
                  type="submit"
                  className="button"
                  onClick={this.loginHandler}
                  value="Login"
                />
              </div>
            </form>
          </center>
        </main>
        <div class="footer">Copyright 2020 - @CoronaVirus.com</div>
      </div>
    );
  }
}

export default Login;
