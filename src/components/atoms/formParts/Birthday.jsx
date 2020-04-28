import React from "react";

const Birthday = (props) => {
  const { val, updateState } = props;

  return (
    <dl className="require">
      <dt>生年月日</dt>
      <dd>
        <input
          type="date"
          name="birthday"
          value={val.birthday}
          onChange={(e) => updateState(e)}
        />
      </dd>
    </dl>
  );
};
export default Birthday;
