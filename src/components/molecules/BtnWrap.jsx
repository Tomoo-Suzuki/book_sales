import React from "react";
import { BtnCart } from "_components/atoms/submitBtn/purchase/BtnCart";
import { BtnReserve } from "_components/atoms/submitBtn/purchase/BtnReserve";
import { BtnWish } from "_components/atoms/submitBtn/purchase/BtnWish";
import { BtnTrial } from "_components/atoms/submitBtn/purchase/BtnTrial";
import { BtnFree } from "_components/atoms/submitBtn/purchase/BtnFree";
import { BtnCartNew } from "_components/atoms/submitBtn/purchase/BtnCartNew";
import { BtnReserveNew } from "_components/atoms/submitBtn/purchase/BtnReserveNew";
import { BtnWishNew } from "_components/atoms/submitBtn/purchase/BtnWishNew";
import { BtnTrialNew } from "_components/atoms/submitBtn/purchase/BtnTrialNew";

import "_scss/molecules/_btnWrap";

import { useSelector } from "react-redux";

const ui_display_style = (state) => state.ui;

const BtnWrap = (props) => {
  const uiState = useSelector(ui_display_style);
  console.log(uiState.display_style);

  const status = props.status;
  const buttons = [];
  if (uiState.display_style === 0) {
    ("");
  } else if (uiState.display_style === 1) {
    if (status === 0) {
      buttons.push(<BtnCart key="bc" />);
    } else if (status === 1) {
      buttons.push(<BtnReserve key="br" />);
    } else if (status === 2) {
      buttons.push(<BtnCartNew key="bcn" />);
    } else if (status === 3) {
      buttons.push(<BtnReserveNew key="brn" />);
    } else if (status === 4) {
      buttons.push(<BtnFree key="bf" />);
    }
  } else {
    if (status === 0) {
      buttons.push(<BtnCart key="bc" />);
      buttons.push(<BtnWish key="bw" />);
      buttons.push(<BtnTrial key="bt" />);
    } else if (status === 1) {
      buttons.push(<BtnReserve key="br" />);
      buttons.push(<BtnWish key="bw" />);
    } else if (status === 2) {
      buttons.push(<BtnCartNew key="bcn" />);
      buttons.push(<BtnWishNew key="bwn" />);
      buttons.push(<BtnTrialNew key="btn" />);
    } else if (status === 3) {
      buttons.push(<BtnReserveNew key="brn" />);
      buttons.push(<BtnWishNew key="bwn" />);
      buttons.push(<BtnTrialNew key="btn" />);
    } else if (status === 4) {
      buttons.push(<BtnFree key="bf" />);
    }
  }
  return <ul className="btnWrap">{buttons}</ul>;
};
export default BtnWrap;
