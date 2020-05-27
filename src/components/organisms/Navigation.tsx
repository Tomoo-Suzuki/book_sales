import * as React from "react";
import ItemCount from "_components/atoms/ItemCount";
import BtnStyleChange from "_components/atoms/uiBtn/BtnStyleChange";
import BtnConfig from "_components/atoms/uiBtn/BtnConfig";
import DisplayNum from "_components/atoms/DisplayNum";
import Pager from "_components/atoms/Pager";
import BtnOrderChange from "_components/atoms/uiBtn/BtnOrderChange";

import "_scss/organisms/_navigation";

const Navigation = () => {
  return (
    <nav className="nav_common">
      <div className="nav_common_upper">
        <ItemCount />
        <BtnStyleChange />
        <BtnConfig />
      </div>
      <div className="nav_common_lower">
        <Pager />
        <DisplayNum />
      </div>
    </nav>
  );
};
export default Navigation;
