import React from "react";

const Tel = () => {
  return (
    <dl>
      <dt>お電話番号</dt>
      <dd>
        <input
          type="text"
          name="tel"
          required
          placeholder="09021334566"
          pattern="\d{2,4}-?\d{3,4}-?\d{3,4}"
        />
      </dd>
    </dl>
  );
};
export default Tel;
