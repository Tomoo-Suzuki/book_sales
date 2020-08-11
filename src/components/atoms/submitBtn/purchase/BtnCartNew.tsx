import * as React from "react";
export const BtnCartNew = (): JSX.Element => {
  return (
    <li className="btn_cart_new">
      <span className="btn">
        <span>
          最新刊を
          <br className="sp" />
          カートに入れる
        </span>
      </span>
      <span className="msg_btn">最新刊をカートに入れました</span>
    </li>
  );
};
export const BtnCartNewL = (): JSX.Element => {
  return (
    <li className="btn_cart_new_l">
      <span>
        <span>
          最新刊を
          <br className="sp" />
          カートに入れる
        </span>
      </span>
    </li>
  );
};
