import * as React from "react";
export const BtnCart = (): JSX.Element => {
  return (
    <li className="btn_cart">
      <span className="btn">
        <span>カートに入れる</span>
      </span>
      <span className="msg_btn">カートに入れました</span>
    </li>
  );
};
export const BtnCartL = (): JSX.Element => {
  return (
    <li className="btn_cart_l">
      <span>
        <span>カートに入れる</span>
      </span>
    </li>
  );
};
