import React from "react";
const File = () => {
  return (
    <dl>
      <dt>商品の画像</dt>
      <dd>
        <label htmlFor="a">a</label>
        <input id="a" name="file" type="file" />
      </dd>
    </dl>
  );
};
export default File;
