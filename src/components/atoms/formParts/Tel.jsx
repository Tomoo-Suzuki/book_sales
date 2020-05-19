import React from "react";

const Tel = (props) => {
  const { val, updateForm, validate, error } = props;

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
          defaultValue={val.tel}
          onChange={(e) => updateForm(e)}
          onBlur={(e) => validate(e)}
        />
        <span className="msg">{error.tel}</span>
      </dd>
    </dl>
  );
};
export default Tel;
