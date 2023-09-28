import * as React from "react";
import "_scss/atoms/_itemCount";

const ItemCount = (): JSX.Element => {
  return (
    <div className="itemCountWrap">
      <p className="itemCount">
        <span>100</span>件&nbsp;中&nbsp;<span>1</span>&nbsp;〜&nbsp;
        <span>25</span>件
      </p>
    </div>
  );
};
export default ItemCount;
