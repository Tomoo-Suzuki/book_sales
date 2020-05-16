import {
  combineReducers
} from "redux";

import account from "_redux/reducers/account";
import item from "_redux/reducers/item";
import ui from "_redux/reducers/ui";
import bookshelf from "_redux/reducers/bookshelf";

export default combineReducers({
  account,
  item,
  ui,
  bookshelf
});