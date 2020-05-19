import React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Name = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <dl className="require">
      <dt>お名前</dt>
      <dd>
        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="山田"
                  //defaultValue={val.last_name}
                  value={user.last_name}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.last_name}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.last_name}</span>
            </div>
          )}
        </>

        <>
          {props.status === 0 && (
            <div className="form_horizontal">
              <span>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="京子"
                  // defaultValue={val.first_name}
                  value={user.first_name}
                  onChange={(e) => updateFormSelf(e, dispatch)}
                  onBlur={(e) => validate(e)}
                />
              </span>
              <span className="msg">{error.first_name}</span>
            </div>
          )}
          {props.status === 1 && (
            <div className="form_horizontal">
              <span>{user.first_name}</span>
            </div>
          )}
        </>
      </dd>
    </dl>
  );
};
export default Name;
