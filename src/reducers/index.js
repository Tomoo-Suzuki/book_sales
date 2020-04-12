import {
  combineReducers
} from "redux";

import main from "_reducers/main";
import member from "_reducers/member";
import book from "_reducers/book";
import history from "_reducers/history";

export default combineReducers({
  main,
  member,
  book,
  history
});