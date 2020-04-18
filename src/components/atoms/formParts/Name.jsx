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
            name="lastName"
            required
            placeholder="山田"
            value={val.lastName}
            onChange={(e) => updateState(e)}
          />
        </span>
        <span>
          <input
            type="text"
            name="firstName"
            required
            placeholder="京子"
            value={val.firstName}
            onChange={(e) => updateState(e)}
          />
        </span>
      </dd>
    </dl>
  );
};
export default Name;
