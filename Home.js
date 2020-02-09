import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import ApiData from "./ApiData";
import addUser from "./icons8-add-user-male-50.png";
import icon from "./icons8-thick-long-right-arrow-64.png";
import listIcon from "./icons8-list-50.png";
import Registraion from "./Registration";
import { withRouter } from "react-router-dom";
import logo from "./icons8-virus-96.png";

class Home extends Component {

  state = {
    data: [],
    firstName: "",
    lastName: "",
    gender: "Male",
    age: "",
    profession: "",
    query: "",
    pan:"No",
    aadhaar:"No",
    user: this.props.location.state.user
  }
  componentDidMount() {
    let fetchData = [];
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(resp => {

        for (let i = 0; i < 6; i++) {
          fetchData.push({
            ...resp.data[i]
          });
        }

        this.setState({ data: fetchData });

      })
  }


  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });

  }

  HandleSubmit = () => {
    return this.props.history.push(
      {
        pathname: "/registration",
        state: { ...this.state }
      });

  }

  render() {
    const list = this.state.data.map(k => {
      return (
        <ApiData title={k.title} url={k.thumbnailUrl} />
      )
    })

    return (

      <div>
        <header className="header">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
          <div style={{ marginLeft: "500px" }}>  <img src={logo} alt="logo"></img><font>CoronaVirus  </font> </div>
          
          <font style={{ marginLeft: "300px",marginTop:"30px"  }}>Welcome, {this.props.location.state.user}</font>
          <button className="bt" onClick={() => {this.props.history.replace("/");}}>Logout</button>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>


        <main>

          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <h3 style={{ borderBottom: "0.25px solid", float: "left" }}>Online Registraion  <img src={addUser} alt="adduser"></img>
              <img src={icon} alt="icon"></img></h3>

            <form className="form">
              <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
              <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" name="firstName" onChange={event => this.onHandleChange(event)} className="form-control" id="exampleInputFirstName1" placeholder="Enter First Name"></input>

              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Last Name</label>
                <input type="text" name="lastName" onChange={event => this.onHandleChange(event)} className="form-control" id="exampleInputLastName1" placeholder="Enter First Name"></input>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input type="Number" name="age" onChange={event => this.onHandleChange(event)} className="form-control" id="exampleInputAge1" placeholder="Enter Age"></input>
              </div>
              <div class="form-check form-check-inline">
                <label for="exampleInputPassword1">Gender &nbsp;&nbsp;&nbsp;</label>
                <input class="form-check-input" onChange={event => this.onHandleChange(event)} type="radio" name="gender" id="exampleRadios1" value="Male" checked></input>
                <label class="form-check-label" for="exampleRadios1">
                  Male
                  </label>&nbsp;
              <input class="form-check-input" onChange={event => this.onHandleChange(event)} type="radio" name="gender" id="exampleRadios2" value="Female"></input>
                <label class="form-check-label" for="exampleRadios2">
                  Female
                    </label>
              </div>
              <hr />
              <div className="form-group">
                <label for="exampleFormControlSelect1">Occupation</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={event => this.onHandleChange(event)} name="profession">
                  <option value="">Select--</option>
                  <option value="Service">Service</option>
                  <option value="Business">Business</option>
                  <option value="Gov. Employee">Gov. Employee</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="pan" value="Yes" onClick={event => this.onHandleChange(event)}id="defaultCheck1"></input>
                  <label class="form-check-label" for="defaultCheck1">
                    Do you have Pan Card ?
                        </label>
                     </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="aadhaar" value="Yes" onClick={event => this.onHandleChange(event)} id="defaultCheck2"></input>
                    <label class="form-check-label" for="defaultCheck2">
                      Do you have Aadhaar Card ?
                </label>
                 </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Query ?</label>
                    <textarea class="form-control" onChange={event => this.onHandleChange(event)} id="exampleFormControlTextarea1" rows="3" name="query"></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" onClick={this.HandleSubmit}>Submit</button>
            </form>
              </div>
              <div className="list">
                <font style={{ marginRight: "1000px", fontSize: "20px" }}><img src={listIcon} alt="Listicon"></img>CoronaVirus API Data Samples </font>
              </div>
              {list}

        </main>
            <div className="list">
              Copyright 2020 - @CoronaVirus.com
          </div>
          </div>
          )
        }
      }
      
      
export default withRouter(Home)