import * as React from "react";
export const BtnReserve = (): JSX.Element => {
  return (
    <li className="btn_reserve">
      <span className="btn">
        <span>予約する</span>
      </span>
      <span className="msg_btn">予約しました</span>
    </li>
  );
};
export const BtnReserveL = (): JSX.Element => {
  return (
    <li className="btn_reserve_l">
      <span>
        <span>予約する</span>
      </span>
    </li>
  );
};
