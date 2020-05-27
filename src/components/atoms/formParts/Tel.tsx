import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Tel = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <dl className="require">
      <dt>お電話番号</dt>
      {props.status === 0 && (
        <dd>
          <input
            type="text"
            name="tel"
            required
            placeholder="09021334566"
            pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
            //defaultValue={val.tel}
            value={user.tel}
            onChange={(e) => updateFormSelf(e, dispatch)}
            onBlur={(e) => validate(e)}
          />
          <span className="msg">{error.tel}</span>
        </dd>
      )}
      {props.status === 1 && <dd>{user.tel}</dd>}
    </dl>
  );
};
export default Tel;
