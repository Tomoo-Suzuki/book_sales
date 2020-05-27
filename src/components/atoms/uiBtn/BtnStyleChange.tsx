import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { update_display } from "_redux/actions/action";

import "_scss/atoms/_btnStyleChange";

const ui_display_style = (state) => state.ui;

const BtnStyleChange = () => {
  const dispatch = useDispatch();
  const uiState = useSelector(ui_display_style);
  //   console.log(uiState);
  const styleChange = (num) => {
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
