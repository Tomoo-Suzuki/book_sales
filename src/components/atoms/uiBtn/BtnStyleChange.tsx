import * as React from "react";
import { useDispatch } from "react-redux";
import { update_display } from "_redux/actions/action";

import "_scss/atoms/_btnStyleChange";

const BtnStyleChange = (): JSX.Element => {
  const dispatch = useDispatch();
  const styleChange = (num: number) => {
    dispatch(update_display(num));
  };
  return (
    <div className="btn_style_box">
      <dl className="btn_style">
        <dt>表示 : </dt>
        <dd className="display_slider" onClick={() => styleChange(0)}></dd>
        <dd className="display_thumbnail" onClick={() => styleChange(1)}></dd>
        <dd className="display_list" onClick={() => styleChange(2)}></dd>
      </dl>
    </div>
  );
};
export default BtnStyleChange;
