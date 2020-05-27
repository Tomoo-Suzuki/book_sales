import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

const userSelector = (state) => state.account.user;

const ReceptionDate = (props) => {
  //   const { val, updateForm } = props;
  const user = useSelector(userSelector);
  return (
    <span>
      <input type="hidden" name="receptionDate" value={user.reception_date} />
    </span>
  );
};
export default ReceptionDate;
