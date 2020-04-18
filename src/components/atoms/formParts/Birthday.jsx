import React from "react";

const Birthday = (props) => {
  const { val, updateState } = props;

  return (
    <dl>
      <dt>生年月日</dt>
      <dd>
        <input
          type="date"
          name="receptionDate"
          value={val.birthday}
          onChange={(e) => updateState(e)}
        />
      </dd>
    </dl>
  );
};
export default Birthday;
