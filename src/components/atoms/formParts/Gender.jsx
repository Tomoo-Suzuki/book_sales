import React from "react";

const Gender = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>ジェンダー</dt>
      <dd>
        <label>
          <span>男性</span>
          <input id="type" type="radio" name="gender" />
        </label>
        <label>
          <span>女性</span>
          <input id="type" type="radio" name="gender" />
        </label>
        <label>
          <span>その他</span>
          <input id="type" type="radio" name="gender" />
        </label>
      </dd>
    </dl>
  );
};
export default Gender;
