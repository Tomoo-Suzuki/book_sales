import React from "react";

import "_scss/atoms/_btnStyleChange";

const BtnStyleChange = () => {
  return (
    <div className="btn_style_box">
      <dl className="btn_style">
        <dt>表示 : </dt>
        <dd className="display_slider"></dd>
        <dd className="display_thumbnail"></dd>
        <dd className="display_list"></dd>
      </dl>
    </div>
  );
};
export default BtnStyleChange;
