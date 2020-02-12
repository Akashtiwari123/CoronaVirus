import React from "react";
import { withRouter } from "react-router-dom";
import "./Registration.css";
import logo from "../../asset/Images/icons8-virus-96.png";
import { connect } from "react-redux";

class Registration extends React.Component {
  state = {
    firstName: this.props.location.state.firstName,
    lastName: this.props.location.state.lastName,
    gender: this.props.location.state.gender,
    age: this.props.location.state.age,
    profession: this.props.location.state.profession,
    query: this.props.location.state.query,
    pan: this.props.location.state.pan,
    aadhaar: this.props.location.state.aadhaar
    //user: this.props.location.state.user
  };

  render() {
    return (
      <div>
        <header className="header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />

          <button
            className="bt"
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Home
          </button>
          <div style={{ marginLeft: "400px" }}>
            {" "}
            <font>
              <img src={logo} alt="logo" />
              CoronaVirus{" "}
            </font>{" "}
          </div>

          <font style={{ marginLeft: "210px", marginTop: "30px" }}>
            {" "}
            Hello, {this.props.username}
          </font>
          <button
            className="bt"
            onClick={() => {
              this.props.history.replace("/");
            }}
          >
            Logout
          </button>
        </header>

        <main>
          <div>
            <center>
              <form>
                <table className="table table-dark">
                  <tr>
                    <th colSpan="2">
                      <h3>Registration Details</h3>
                    </th>
                  </tr>
                  <tr>
                    <td scope="row">First Name :</td>
                    <td>
                      <h4>{this.state.firstName}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name :</td>
                    <td>
                      <h4>{this.state.lastName}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Gender :</td>
                    <td>
                      <h4>{this.state.gender}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Age :</td>
                    <td>
                      <h4>{this.state.age}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Occupation :</td>
                    <td>
                      <h4>{this.state.profession}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Pan :</td>
                    <td>
                      <h4>{this.state.pan}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Aadhaar :</td>
                    <td>
                      <h4>{this.state.aadhaar}</h4>
                    </td>
                  </tr>
                  <tr>
                    {" "}
                    <td>Your Query :</td>
                    <td>
                      <h4>{this.state.query}</h4>
                    </td>
                  </tr>
                </table>
              </form>
            </center>
          </div>
        </main>
        <div className="list">Copyright 2020 - @CoronaVirus.com</div>
      </div>
    );
  }
}

const mapStaeToProps = state => {
  return {
    username: state.user
  };
};
export default connect(mapStaeToProps)(withRouter(Registration));
