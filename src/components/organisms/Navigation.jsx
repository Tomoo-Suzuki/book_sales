import React from "react";
import ItemCount from "_components/atoms/ItemCount";
import BtnStyleChange from "_components/atoms/uiBtn/BtnStyleChange";
import BtnConfig from "_components/atoms/uiBtn/BtnConfig";
import DisplayNum from "_components/atoms/DisplayNum";
import Pager from "_components/atoms/Pager";
import BtnOrderChange from "_components/atoms/uiBtn/BtnOrderChange";
const Navigation = () => {
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
export default Navigation;
