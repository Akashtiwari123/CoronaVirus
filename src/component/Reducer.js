import React from "react";

const initialState = {
  val: true,
  user: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "USER") {
    console.log("Reducer " + action.username);
    return {
      ...state,
      user: action.username
    };
  } else {
    return {
      ...state,
      val: false
    };
  }
};
export default reducer;
