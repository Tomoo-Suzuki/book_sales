import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Gender = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <dl className="require">
      <dt>ジェンダー</dt>
      {props.status === 0 && (
        <dd className="radioAndCheckbox">
          <label>
            <span>男性</span>
            <input
              type="radio"
              name="gender"
              value={1}
              checked={Number(user.gender) === 1}
              onChange={(e) => updateFormSelf(e, dispatch)}
              onBlur={(e) => validate(e)}
            />
          </label>
          <label>
            <span>女性</span>
            <input
              type="radio"
              name="gender"
              value={2}
              checked={Number(user.gender) === 2}
              onChange={(e) => updateFormSelf(e, dispatch)}
              onBlur={(e) => validate(e)}
            />
          </label>
          <label>
            <span>その他</span>
            <input
              type="radio"
              name="gender"
              value={3}
              checked={Number(user.gender) === 3}
              onChange={(e) => updateFormSelf(e, dispatch)}
              onBlur={(e) => validate(e)}
            />
          </label>
          <span> {error.gender}</span>
        </dd>
      )}
      {props.status === 1 && (
        <dd>
          <span>{user.gender}</span>
        </dd>
      )}
    </dl>
  );
};
export default Gender;
