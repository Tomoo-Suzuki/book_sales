import { combineReducers } from "redux";

import main from "reducers/main";
import member from "reducers/member";
import book from "reducers/book";
import history from "reducers/history";

export default combineReducers({
  main,
  member,
  book,
  history
});
