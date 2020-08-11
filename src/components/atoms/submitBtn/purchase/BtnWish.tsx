import * as React from "react";
export const BtnWish = (): JSX.Element => {
  return (
    <li className="btn_wish">
      <span className="btn">
        <span>リストに入れる</span>
      </span>
      <span className="msg_btn">リストに入れました</span>
    </li>
  );
};
export const BtnWishL = (): JSX.Element => {
  return (
    <li className="btn_wish_l">
      <span>
        <span>リストに入れる</span>
      </span>
    </li>
  );
};
