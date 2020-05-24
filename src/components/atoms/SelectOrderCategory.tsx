import * as React from "react";

export const SelectOrderCategory = () => {
  return (
    <select>
      <option>価格の高い順</option>
      <option>価格の安い順</option>
      <option>ポイントの高い順</option>
      <option>人気順</option>
      <option>五十音順</option>
    </select>
  );
};
