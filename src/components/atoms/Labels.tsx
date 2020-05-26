import * as React from "react";
import { useSelector } from "react-redux";

const ui_display_style = (state) => state.ui;

import "_scss/atoms/_labels";

const Labels = (props) => {
  const uiState = useSelector(ui_display_style);
  let labelElements: Array<any> = [];
  const labels = props.data;
  if (uiState.display_style === 0) {
    if (labels.label_new) {
      labelElements.push(
        <li className="label_new" key="new">
          NEW
        </li>
      );
    }
  } else if (uiState.display_style === 1) {
    if (labels.label_new) {
      labelElements.push(
        <li className="label_new" key="new">
          NEW
        </li>
      );
    }

    if (labels.label_complete_s) {
      labelElements.push(
        <li className="label_finish" key="fin">
          完結
        </li>
      );
    }
  } else {
    if (labels.label_new) {
      labelElements.push(
        <li className="label_new" key="new">
          NEW
        </li>
      );
    }
    if (labels.label_free) {
      labelElements.push(
        <li className="label_free" key="free">
          無料
        </li>
      );
    }
    if (labels.label_free_s) {
      labelElements.push(
        <li className="label_free" key="hasfree">
          無料あり
        </li>
      );
    }
    if (labels.label_disc) {
      labelElements.push(
        <li className="label_discount" key="disc">
          割引
        </li>
      );
    }
    if (labels.label_disc_s) {
      labelElements.push(
        <li className="label_discount" key="hasdisc">
          割引あり
        </li>
      );
    }
    if (labels.label_off) {
      labelElements.push(
        <li className="label_discount_num" key="off">
          20%OFF
        </li>
      );
    }
    if (labels.label_complete_s) {
      labelElements.push(
        <li className="label_finish" key="fin">
          完結
        </li>
      );
    }
  }
  return (
    <span>
      <ul className="labelBox">{labelElements}</ul>
    </span>
  );
};
export default Labels;
