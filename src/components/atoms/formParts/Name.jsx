import React from "react";
const Name = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>お名前</dt>
      <dd>
        <span>
          <input
            type="text"
            name="last_name"
            required
            placeholder="山田"
            value={val.last_name}
            onChange={(e) => updateState(e)}
          />
        </span>
        <span>
          <input
            type="text"
            name="first_name"
            required
            placeholder="京子"
            value={val.first_name}
            onChange={(e) => updateState(e)}
          />
        </span>
      </dd>
    </dl>
  );
};
export default Name;
