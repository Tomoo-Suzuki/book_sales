import {
  combineReducers
} from "redux";

import account from "_redux/reducers/account";
import item from "_redux/reducers/item";

export default combineReducers({
  account,
  item
});