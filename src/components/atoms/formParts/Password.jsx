import React, { useState } from "react";
import "_scss/atoms/submitBtn/_btnPassword.scss";

const Password = (props) => {
  const { val, updateState } = props;
  const [isVisible, funcIsVisible] = useState(false);
  let inputType = isVisible ? "text" : "password";
  let nameBtn = isVisible ? "隠す" : "表示";
  let displayPassword = (e) => {
    e.preventDefault();
    if (isVisible === false) {
      funcIsVisible(true);
    } else {
      funcIsVisible(false);
    }
  };
  return (
    <React.Fragment>
      <dl>
        <dt>パスワード</dt>
        <dd className="has_tooltip">
          <input
            type={inputType}
            name="password"
            required
            placeholder="tsex90876"
            value={val.useId}
            onChange={(e) => updateState(e)}
          />
          <span className="tooltip">
            8文字以上。半角英数字、半角記号が使えます。
          </span>
        </dd>
      </dl>
      <button onClick={displayPassword} className={"btn_" + inputType}>
        {nameBtn}
      </button>
    </React.Fragment>
  );
};
export default Password;
