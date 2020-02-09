import React from "react";
import "./ApiData.css";

const ApiData=(props)=>{
    return(
        
            <div className="layout">
               <h3 style={{fontFamily:"Segoe",fontStyle:"normal",fontSize:"20px"}}>{props.title}</h3> 
               <img src={props.url} alt="imgdata"></img>
            </div>
    )
}

export default ApiData