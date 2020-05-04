import React from "react";

const Gender = (props) => {
  const { val, updateState } = props;

  return (
    <dl className="require">
      <dt>ジェンダー</dt>
      <dd className="radioAndCheckbox">
        <label>
          <span>男性</span>
          <input
            type="radio"
            name="gender"
            value="man"
            checked={val.gender === "man"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>女性</span>
          <input
            type="radio"
            name="gender"
            value="woman"
            checked={val.gender === "woman"}
            onChange={(e) => updateState(e)}
          />
        </label>
        <label>
          <span>その他</span>
          <input
            type="radio"
            name="gender"
            value="lgbt"
            checked={val.gender === "lgbt"}
            onChange={(e) => updateState(e)}
          />
        </label>
      </dd>
    </dl>
  );
};
export default Gender;
