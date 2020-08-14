import * as React from "react";
import { useSelector } from "react-redux";

const ui_display_style = (state) => state.ui;

import "_scss/atoms/_labels";

import { InterfaceLabel } from "../types/atoms/InterfaceLabel";

type Props = {
  data: InterfaceLabel;
  shelfType: number;
};

const LabelsShelf = (props: Props): JSX.Element => {
  const uiState = useSelector(ui_display_style);
  let labelElements: Array<any> = [];
  const labels = props.data;
  const shelfType = props.shelfType;
  if (shelfType === 0) {
    if (uiState.display_style === 0) {
      if (labels.label_new) {
        labelElements.push(
          <li className="label_new" key="new">
            最新
          </li>
        );
      }
    } else if (uiState.display_style === 1) {
      if (labels.label_new) {
        labelElements.push(
          <li className="label_new" key="new">
            最新
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
            最新
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
  }

  return (
    <span>
      <ul className="labelBox">{labelElements}</ul>
    </span>
  );
};
export default LabelsShelf;
