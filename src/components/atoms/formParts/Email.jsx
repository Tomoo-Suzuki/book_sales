import React from "react";
const Email = (props) => {
  const { val, updateState } = props;

  return (
    <span>
      <dl>
        <dt>メール</dt>
        <dd>
          <input
            type="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="aaa@bbb.cc.dd"
            title="メールアドレス"
            value={val.email}
            onChange={(e) => updateState(e)}
          />
        </dd>
      </dl>
      <dl>
        <dt>メール(確認用)</dt>
        <dd>
          <input
            type="email"
            name="email_confirm"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="aaa@bbb.cc.dd"
            title="メールアドレス確認"
            value={val.email_confirm}
            onChange={(e) => updateState(e)}
          />
        </dd>
      </dl>
    </span>
  );
};
export default Email;
