import * as React from "react";
export const BtnReserveNew = (): JSX.Element => {
  return (
    <li className="btn_reserve_new">
      <span className="btn">
        <span>
          最新刊を
          <br className="sp" />
          予約する
        </span>
      </span>
      <span className="msg_btn">予約しました</span>
    </li>
  );
};
export const BtnReserveNewL = (): JSX.Element => {
  return (
    <li className="btn_reserve_new_l">
      <span>
        <span>
          最新刊を
          <br className="sp" />
          予約する
        </span>
      </span>
    </li>
  );
};
