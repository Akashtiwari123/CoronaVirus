import React, { Component } from "react";
import "../App.css";
import "./../component/Layout/Layout.css";
import user from "./../asset/Images/login.png";
import logo from "./../asset/Images/icons8-virus-96.png";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginHandler = () => {
    if (this.state.username === "Admin" && this.state.password === "admin") {
      this.props.handleUserName(this.state.username);
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
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />

          <div className="head">
            <img src={logo} alt="logo" />
            CoronaVirus
          </div>
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
        <div className="footer">Copyright 2020 - @CoronaVirus.com</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    usernaname: state.username
  };
};
const mapDispatchToProps = dispatch => {
  //console.log("Before Dispatch " + this.state.username);
  return {
    handleUserName: users =>
      dispatch(
        { type: "USER", username: users },
        console.log("After Dispatch " + users)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
