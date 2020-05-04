import React from "react";

const Tel = (props) => {
  const { val, updateState } = props;

  return (
    <dl className="require">
      <dt>お電話番号</dt>
      <dd>
        <input
          type="text"
          name="tel"
          required
          placeholder="09021334566"
          pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
          value={val.tel}
          onChange={(e) => updateState(e)}
        />
      </dd>
    </dl>
  );
};
export default Tel;
