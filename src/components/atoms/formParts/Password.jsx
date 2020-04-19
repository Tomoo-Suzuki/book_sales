import React, { useState } from "react";

const Password = (props) => {
  const { val, updateState } = props;
  const [visible, funcIsVisible] = useState("password");

  let displayPassword = () => {
    if (visible === "password") {
      funcIsVisible("text");
    } else {
      funcIsVisible("password");
    }
  };
  return (
    <dl>
      <dt>パスワード{visible}</dt>
      <dd>
        <input
          type={visible}
          name="password"
          required
          placeholder="tsex90876"
          value={val.useId}
          onChange={(e) => updateState(e)}
        />
      </dd>
      <button onClick={displayPassword}>visible</button>
      <dd>8文字以上。半角英数字、半角記号が使えます。</dd>
    </dl>
  );
};
export default Password;
