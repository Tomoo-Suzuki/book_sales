import React from "react";

const Gender = (props) => {
  const { val, updateForm } = props;
  return (
    <dl className="require">
      <dt>ジェンダー</dt>
      <dd className="radioAndCheckbox">
        <label>
          <span>男性</span>
          <input
            type="radio"
            name="gender"
            value={0}
            checked={Number(val.gender) === 0}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>女性</span>
          <input
            type="radio"
            name="gender"
            value={1}
            checked={Number(val.gender) === 1}
            onChange={(e) => updateForm(e)}
          />
        </label>
        <label>
          <span>その他</span>
          <input
            type="radio"
            name="gender"
            value={2}
            checked={Number(val.gender) === 2}
            onChange={(e) => updateForm(e)}
          />
        </label>
      </dd>
    </dl>
  );
};
export default Gender;
