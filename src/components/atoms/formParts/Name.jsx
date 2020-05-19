import React from "react";

const Name = (props) => {
  const { val, updateForm, validate, error } = props;

  return (
    <dl className="require">
      <dt>お名前</dt>
      <dd>
        <span>
          <input
            type="text"
            name="last_name"
            required
            placeholder="山田"
            defaultValue={val.last_name}
            // value={val.last_name}
            onChange={(e) => updateForm(e)}
            onBlur={(e) => validate(e)}
          />
        </span>
        <span>
          <input
            type="text"
            name="first_name"
            required
            placeholder="京子"
            // value={val.first_name}
            defaultValue={val.first_name}
            onChange={(e) => updateForm(e)}
            onBlur={(e) => validate(e)}
          />
        </span>
      </dd>
      {error.last_name}
      {error.first_name}
    </dl>
  );
};
export default Name;
