import * as React from "react";
import { useSelector } from "react-redux";

const userSelector = (state) => state.account.user;

const ReceptionDate = (): JSX.Element => {
  //   const { val, updateForm } = props;
  const user = useSelector(userSelector);
  return (
    <span>
      <input type="hidden" name="receptionDate" value={user.reception_date} />
    </span>
  );
};
export default ReceptionDate;
