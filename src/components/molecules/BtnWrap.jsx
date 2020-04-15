import React from "react";
import { BtnCart } from "_components/atoms/submitBtn/BtnCart";
import { BtnReserve } from "_components/atoms/submitBtn/BtnReserve";
import { BtnWish } from "_components/atoms/submitBtn/BtnWish";
import { BtnTrial } from "_components/atoms/submitBtn/BtnTrial";
import { BtnFree } from "_components/atoms/submitBtn/BtnFree";
import { BtnCartNew } from "_components/atoms/submitBtn/BtnCartNew";
import { BtnReserveNew } from "_components/atoms/submitBtn/BtnReserveNew";
import { BtnWishNew } from "_components/atoms/submitBtn/BtnWishNew";
import { BtnTrialNew } from "_components/atoms/submitBtn/BtnTrialNew";
class BtnWrap extends React.Component {
  render() {
    this.status = this.props.status;
    this.buttons = [];
    if (this.status === 0) {
      this.buttons.push(<BtnCart />);
      this.buttons.push(<BtnWish />);
      this.buttons.push(<BtnTrial />);
    } else if (this.status === 1) {
      this.buttons.push(<BtnReserve />);
      this.buttons.push(<BtnWish />);
    } else if (this.status === 2) {
      this.buttons.push(<BtnCartNew />);
      this.buttons.push(<BtnWishNew />);
      this.buttons.push(<BtnTrialNew />);
    } else if (this.status === 3) {
      this.buttons.push(<BtnReserveNew />);
      this.buttons.push(<BtnWishNew />);
      this.buttons.push(<BtnTrialNew />);
    } else if (this.status === 4) {
      this.buttons.push(<BtnFree />);
    }
    return <ul>{this.buttons}</ul>;
  }
}
export default BtnWrap;
