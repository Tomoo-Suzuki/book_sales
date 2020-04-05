import React from "react";
const Color = () => {
  return (
    <dl>
      <dt>色</dt>
      <dd>
        <select required name="color">
          <option v-for="color in colors" required>
            color
          </option>
        </select>
      </dd>
    </dl>
  );
};
export default Color;
