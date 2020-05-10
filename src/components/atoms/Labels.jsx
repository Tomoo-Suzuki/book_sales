import React from "react";

import "_scss/atoms/_labels";
class Labels extends React.Component {
  render() {
    this.labelElements = [];
    const labels = this.props.data;
    if (labels.label_new) {
      this.labelElements.push(
        <li className="label_new" key="new">
          NEW
        </li>
      );
    }
    if (labels.label_free) {
      this.labelElements.push(
        <li className="label_free" key="free">
          無料
        </li>
      );
    }
    if (labels.label_free_s) {
      this.labelElements.push(
        <li className="label_free" key="hasfree">
          無料あり
        </li>
      );
    }
    if (labels.label_disc) {
      this.labelElements.push(
        <li className="label_discount" key="disc">
          割引
        </li>
      );
    }
    if (labels.label_disc_s) {
      this.labelElements.push(
        <li className="label_discount" key="hasdisc">
          割引あり
        </li>
      );
    }
    if (labels.label_off) {
      this.labelElements.push(
        <li className="label_discount_num" key="off">
          20%OFF
        </li>
      );
    }
    if (labels.label_complete_s) {
      this.labelElements.push(
        <li className="label_finish" key="fin">
          完結
        </li>
      );
    }
    return (
      <span>
        <ul className="labelBox">{this.labelElements}</ul>
      </span>
    );
  }
}
export default Labels;
