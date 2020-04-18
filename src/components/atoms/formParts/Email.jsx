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
            name="mail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="09021334566"
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
            type="emailConfirm"
            name="mail2"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            placeholder="09021334566"
            title="メールアドレス確認"
            value={val.emailConfirm}
            onChange={(e) => updateState(e)}
          />
        </dd>
      </dl>
    </span>
  );
};
export default Email;
