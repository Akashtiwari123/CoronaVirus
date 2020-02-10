import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    console.log(this.props.children.props.user);
    return (
      <div className="App">
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
