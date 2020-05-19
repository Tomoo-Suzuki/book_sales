import React from "react";
const Email = (props) => {
  const { val, updateForm, validate, error } = props;

  return (
    <span>
      <dl className="require">
        <dt>メール</dt>
        <dd>
          <input
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="aaa@bbb.cc.dd"
            title="メールアドレス"
            defaultValue={val.email}
            onChange={(e) => updateForm(e)}
            onBlur={(e) => validate(e)}
          />
        </dd>
      </dl>
      <dl className="require">
        <dt>メール(確認用)</dt>
        <dd>
          <input
            type="email"
            name="email_confirm"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="aaa@bbb.cc.dd"
            title="メールアドレス確認"
            defaultValue={val.email_confirm}
            onChange={(e) => updateForm(e)}
            onBlur={(e) => validate(e)}
          />
        </dd>
      </dl>
      {error.email}
      {error.email_confirm}
    </span>
  );
};
export default Email;
