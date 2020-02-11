import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import ApiData from "../../component/ApiData/ApiData";
import addUser from "../../asset/Images/icons8-add-user-male-50.png";
import icon from "../../asset/Images/icons8-thick-long-right-arrow-64.png";
import listIcon from "../../asset/Images/icons8-list-50.png";
import { withRouter } from "react-router-dom";
import logo from "../../asset/Images/icons8-virus-96.png";

class Home extends Component {
  state = {
    load: false,
    api: false,
    data: [],
    firstName: "",
    lastName: "",
    gender: "Male",
    age: "",
    profession: "",
    query: "",
    pan: "No",
    aadhaar: "No",
    user: this.props.location.state.user
  };
  componentDidMount() {
    let fetchData = [];
    axios.get("https://jsonplaceholder.typicode.com/photos").then(resp => {
      for (let i = 0; i < 6; i++) {
        fetchData.push({
          ...resp.data[i]
        });
      }
      this.setState({ data: fetchData });
    });
  }

  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  onHandleForm = () => {
    this.setState({ load: !this.state.load, api: false });
  };

  onHandleApi = () => {
    this.setState({ api: !this.state.api, load: false });
  };

  HandleSubmit = () => {
    return this.props.history.push({
      pathname: "/registration",
      state: { ...this.state }
    });
  };
  HandleReset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      gender: "Male",
      age: "",
      profession: "",
      pan: "No",
      aadhaar: "No",
      query: ""
    });
  };
  render() {
    const list = this.state.data.map(k => {
      return <ApiData title={k.title} url={k.thumbnailUrl} />;
    });

    let homepage = null;
    if (!this.state.api && !this.state.load) {
      homepage = (
        <div>
          <div className="para">
            <p>
              {" "}
              <strong>Coronaviruses (CoV) </strong> are a large family of
              viruses that cause illness ranging from the common cold to more
              severe diseases such as{" "}
              <a
                href="https://www.who.int/emergencies/mers-cov/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Middle East Respiratory Syndrome (MERS-CoV)
              </a>{" "}
              and{" "}
              <a
                href="https://www.who.int/csr/sars/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Severe Acute Respiratory Syndrome (SARS-CoV)
              </a>
              .
              <a
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                A novel coronavirus (nCoV){" "}
              </a>
              is a new strain that has not been previously identified in humans.
            </p>
            <p>
              Coronaviruses are zoonotic, meaning they are transmitted between
              animals and people. Detailed investigations found that SARS-CoV
              was transmitted from civet cats to humans and MERS-CoV from
              dromedary camels to humans. Several known coronaviruses are
              circulating in animals that have not yet infected humans.
            </p>{" "}
            <p>
              Common signs of infection include respiratory symptoms, fever,
              cough, shortness of breath and breathing difficulties. In more
              severe cases, infection can cause pneumonia, severe acute
              respiratory syndrome, kidney failure and even death.
            </p>
          </div>
          <div className="content">
            <h1 className="p" style={{ fontSize: "30px", fontStyle: "bold" }}>
              Basic protective measures against the new coronavirus
            </h1>
            <hr />
            <p>
              <iframe
                title="corona-video1"
                width="560"
                height="475"
                src="https://www.youtube.com/embed/6Ooz1GZsQ70"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                className="frame"
              >
                &nbsp;
              </iframe>
            </p>
            <hr />
            <h3 className="p">Wash your hands frequently</h3>
            <p>
              Wash your hands frequently with soap and water or use an
              alcohol-based hand rub if your hands are not visibly dirty.
            </p>
            <p>
              <strong>Why?</strong> Washing your hands with soap and water or
              using alcohol-based hand rub eliminates the virus if it is on your
              hands.&nbsp;
            </p>
            <hr />
            <h3 className="p">Practice respiratory hygiene</h3>
            <p>
              When coughing and sneezing, cover mouth and nose with flexed elbow
              or tissue – discard tissue immediately into a closed bin and clean
              your hands with alcohol-based hand rub or soap and water.
            </p>
            <p>
              <strong>Why?</strong> Covering your mouth and nose when coughing
              and sneezing prevent the spread of germs and viruses. If you
              sneeze or cough into your hands, you may contaminate objects or
              people that you touch.
            </p>
            <hr />
            <h3 className="p">Maintain social distancing</h3>
            <p>
              Maintain at least 1 metre (3 feet) distance between yourself and
              other people, particularly those who are coughing, sneezing and
              have a fever.
            </p>
            <p>
              <strong>Why?</strong> When someone who is infected with a
              respiratory disease, like 2019-nCoV, coughs or sneezes they
              project small droplets containing the virus. If you are too close,
              you can breathe in the virus.
            </p>
            <hr />
            <h3 className="p">Avoid touching eyes, nose and mouth</h3>
            <p>
              <strong>Why?&nbsp;</strong>
              Hands touch many surfaces which can be contaminated with the
              virus. If you touch your eyes, nose or mouth with your
              contaminated hands, you can transfer the virus from the surface to
              yourself.&nbsp;
            </p>
            <hr />
            <h3 className="p">
              If you have fever, cough and difficulty breathing, seek medical
              care early
            </h3>
            <p>
              Tell your health care provider if you have traveled in an area in
              China where 2019-nCoV has been reported, or if you have been in
              close contact with someone with who has traveled from China and
              has respiratory symptoms.
            </p>
            <p>
              <strong>Why?</strong> Whenever you have fever, cough and
              difficulty breathing it’s important to seek medical attention
              promptly as this may be due to a respiratory infection or other
              serious condition. Respiratory symptoms with fever can have a
              range of causes, and depending on your personal travel history and
              circumstances, 2019-nCoV could be one of them.
            </p>
            <hr />
            <p>
              <iframe
                title="corona-video2"
                width="560"
                height="475"
                src="https://www.youtube.com/embed/qF42gZVm1Bo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
                className="frame"
              >
                &nbsp;
              </iframe>
            </p>
          </div>
        </div>
      );
    }
    let apiList = null;
    if (this.state.api) {
      apiList = (
        <div>
          <div className="lists">
            <font style={{ marginRight: "1000px", fontSize: "20px" }}>
              <img src={listIcon} alt="Listicon" />
              CoronaVirus API Data{" "}
            </font>
          </div>
          {list}
        </div>
      );
    }
    let register = null;
    if (this.state.load) {
      register = (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h3 style={{ borderBottom: "0.25px solid", float: "left" }}>
            Online Registration <img src={addUser} alt="adduser" />
            <img src={icon} alt="icon" />
          </h3>

          <form className="form">
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your details with anyone else.
            </small>
            <div className="form-group">
              <label for="exampleInputEmail1">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={event => this.onHandleChange(event)}
                className="form-control"
                id="exampleInputFirstName1"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={event => this.onHandleChange(event)}
                className="form-control"
                id="exampleInputLastName1"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Age</label>
              <input
                type="Number"
                name="age"
                onChange={event => this.onHandleChange(event)}
                className="form-control"
                id="exampleInputAge1"
                placeholder="Enter Age"
              />
            </div>
            <div class="form-check form-check-inline">
              <label for="exampleInputPassword1">
                Gender &nbsp;&nbsp;&nbsp;
              </label>
              <input
                class="form-check-input"
                onChange={event => this.onHandleChange(event)}
                type="radio"
                name="gender"
                id="exampleRadios1"
                value="Male"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Male
              </label>
              &nbsp;
              <input
                class="form-check-input"
                onChange={event => this.onHandleChange(event)}
                type="radio"
                name="gender"
                id="exampleRadios2"
                value="Female"
              />
              <label class="form-check-label" for="exampleRadios2">
                Female
              </label>
            </div>
            <hr />
            <div className="form-group">
              <label for="exampleFormControlSelect1">Occupation</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={event => this.onHandleChange(event)}
                name="profession"
              >
                <option value="">Select--</option>
                <option value="Service">Service</option>
                <option value="Business">Business</option>
                <option value="Gov. Employee">Gov. Employee</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="pan"
                value="Yes"
                onClick={event => this.onHandleChange(event)}
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Do you have Pan Card ?
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name="aadhaar"
                value="Yes"
                onClick={event => this.onHandleChange(event)}
                id="defaultCheck2"
              />
              <label class="form-check-label" for="defaultCheck2">
                Do you have Aadhaar Card ?
              </label>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Query ?</label>
              <textarea
                class="form-control"
                onChange={event => this.onHandleChange(event)}
                id="exampleFormControlTextarea1"
                rows="3"
                name="query"
              />
            </div>
            <button
              type="reset"
              className="btn btn-primary"
              onClick={this.HandleReset}
            >
              Reset
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.HandleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      );
    }
    return (
      <div>
        <header className="header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" />
          <button className="hbtn" onClick={this.onHandleForm}>
            Registration
          </button>
          <button className="hbtn" onClick={this.onHandleApi}>
            Data
          </button>
          <a href="/home" style={{ textDecoration: "none" }}>
            {" "}
            <div style={{ marginLeft: "200px" }}>
              <img src={logo} alt="logo" />
              <font>CoronaVirus </font>{" "}
            </div>
          </a>
          <font
            style={{ marginLeft: "180px", marginTop: "30px", fontSize: "22px" }}
          >
            Welcome, {this.props.location.state.user}
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
          {homepage}
          {register}
          {apiList}
        </main>
        <div className="list">Copyright 2020 - @CoronaVirus.com</div>
      </div>
    );
  }
}

export default withRouter(Home);
