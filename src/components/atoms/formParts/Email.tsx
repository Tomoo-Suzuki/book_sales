import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import updateFormSelf from "_lib/updateFormSelf";

const userSelector = (state) => state.account.user;

const Email = (props) => {
  const { val, updateForm, validate, error } = props;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <span>
      <dl className="require">
        <dt>メール</dt>

        {props.status === 0 && (
          <dd>
            <input
              type="email"
              name="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              placeholder="aaa@bbb.cc.dd"
              title="メールアドレス"
              //defaultValue={val.email}
              value={user.email}
              onChange={(e) => updateFormSelf(e, dispatch)}
              onBlur={(e) => validate(e)}
            />
            <span className="msg"> {error.email}</span>
          </dd>
        )}
        {props.status === 1 && <dd>{user.email} </dd>}
      </dl>
      <dl className="require">
        <dt>メール(確認用)</dt>

        {props.status === 0 && (
          <dd>
            <input
              type="email"
              name="email_confirm"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              placeholder="aaa@bbb.cc.dd"
              title="メールアドレス確認"
              //defaultValue={val.email_confirm}
              value={user.email_confirm}
              onChange={(e) => updateFormSelf(e, dispatch)}
              onBlur={(e) => validate(e)}
            />
            <span className="msg">{error.email_confirm}</span>
          </dd>
        )}

        {props.status === 1 && <dd>{user.email_confirm}</dd>}
      </dl>
    </span>
  );
};
export default Email;
