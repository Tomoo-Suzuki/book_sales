import React from "react";
const ProductNumber = () => {
  return (
    <dl>
      <dt>品番</dt>
      <dd>
        <select name="productNumber" required>
          <option v-for="productNumber in productNumbers" required>
            productNumber
          </option>
        </select>
        <p>productNumber</p>
      </dd>
    </dl>
  );
};
export default ProductNumber;
