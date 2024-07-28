import { ActionType } from "../action-types";
import { FetchUserAction } from "../actions/types";
const authReducer = function (state = null, action: FetchUserAction) {
  console.log(action.type);
  switch (action.type) {
    case ActionType.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default authReducer;
