import React from "react";
const Name = () => {
  return (
    <dl>
      <dt>お名前</dt>
      <dd>
        <span>
          <input type="text" name="lastName" required placeholder="山田" />
        </span>
        <span>
          <input type="text" name="firstName" required placeholder="京子" />
        </span>
      </dd>
    </dl>
  );
};
export default Name;
