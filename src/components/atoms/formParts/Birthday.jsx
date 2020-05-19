import React from "react";

const Birthday = (props) => {
  const { val, updateForm, validate, error } = props;
  return (
    <dl className="require">
      <dt>生年月日</dt>
      <dd>
        <input
          type="date"
          name="birthday"
          defaultValue={val.birthday}
          onChange={(e) => updateForm(e)}
          onBlur={(e) => validate(e)}
        />
        <span className="msg">{error.birthday}</span>
      </dd>
    </dl>
  );
};
export default Birthday;
