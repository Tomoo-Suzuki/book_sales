import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const ReceptionDate = (props) => {
  //   const { val, updateForm } = props;
  const user = useSelector(userSelector);
  return (
    <span>
      <input
        type="hidden"
        name="receptionDate"
        value={user.reception_date}
        onChange={(e) => updateFormSelf(e, dispatch)}
      />
    </span>
  );
};
export default ReceptionDate;
