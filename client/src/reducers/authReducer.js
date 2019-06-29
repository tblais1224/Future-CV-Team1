import isEmpty from "../validations/is-empty";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

//A reducer's switch statement reads an action's type, and then executes some non-mutating data processing. Each case in the switch statement then returns a new copy of state.
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
          //make and return a new instance of state with user data and isAuth true if the decoded token is not empty
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
