import React from "react";
const Size = () => {
  return (
    <dl>
      <dt>サイズ</dt>
      <dd>
        <select name="size" required>
          <option v-for="(data,val) in allSize" required></option>
        </select>
      </dd>
    </dl>
  );
};
export default Size;
