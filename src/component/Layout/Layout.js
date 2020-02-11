import React from "react";
import "./Layout.css";

const Layout = props => {
  return (
    <div className="App">
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
