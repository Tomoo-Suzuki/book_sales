import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Birthday = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <dl className="require">
      <dt>生年月日</dt>
      {props.status === 0 && (
        <dd>
          <input
            type="date"
            name="birthday"
            //defaultValue={val.birthday}
            value={user.birthday}
            required
            onChange={(e) => updateFormSelf(e, dispatch)}
            onBlur={(e) => validate(e)}
          />
          <span className="msg">{error.birthday}</span>
        </dd>
      )}
      {props.status === 1 && <dd>{user.birthday}</dd>}
    </dl>
  );
};
export default Birthday;
