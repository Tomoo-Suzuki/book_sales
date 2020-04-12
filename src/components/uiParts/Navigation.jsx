import React from "react";
import ItemCount from "_components/uiParts/ItemCount";
import BtnStyleChange from "_components/uiParts/BtnStyleChange";
import BtnConfig from "_components/uiParts/BtnConfig";
import DisplayNum from "_components/uiParts/DisplayNum";
import Pager from "_components/uiParts/Pager";
import BtnOrderChange from "_components/uiParts/BtnOrderChange";
const PcNavigation = () => {
  return (
    <nav className="">
      <div>
        <ItemCount />
        <BtnStyleChange />
        <BtnConfig />
      </div>
      <div>
        <DisplayNum />
        <Pager />
      </div>
      <BtnOrderChange />
    </nav>
  );
};
export default PcNavigation;
