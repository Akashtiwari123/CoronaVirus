import React from "react";

const initialState = {
  val: true,
  user:""
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE") {
    return {
      ...state,
      val: false
  }
}
   else {
    return  {
        ...state,
        val: false
    }
  }
};
export default reducer;
