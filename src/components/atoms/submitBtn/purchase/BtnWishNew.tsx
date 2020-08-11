import * as React from "react";
export const BtnWishNew = (): JSX.Element => {
  return (
    <li className="btn_wish_new">
      <span className="btn">
        <span>
          最新刊を
          <br className="sp" />
          リストに入れる
        </span>
      </span>
      <span className="msg_btn">最新刊をリストに入れました</span>
    </li>
  );
};
export const BtnWishNewL = (): JSX.Element => {
  return (
    <li className="btn_wish_new_l">
      <span>
        <span>
          最新刊を
          <br className="sp" />
          リストに入れる
        </span>
      </span>
    </li>
  );
};
