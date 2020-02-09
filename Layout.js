import React,{Component} from "react";
import "./Layout.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Layout extends Component{

    render(){
  console.log(this.props.children.props.user)
        return(
     <div className="App">
        <main>
            {this.props.children}
        </main>
       
      </div>
        )
    }
}

export default Layout