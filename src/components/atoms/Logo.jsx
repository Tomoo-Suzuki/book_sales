import React from "react";
import "_scss/atoms/_logo";

export default function Logo(props) {
  let type;
  if (props.logoType === "0") {
    type = "sale";
  } else if (props.logoType === "1") {
    type = "upload";
  } else if (props.logoType === "2") {
    type = "read";
  }
  return (
    <div className="imgWrap">
      <img src={`./img/logo_${type}.svg`} alt={`logo ${type}`} />
    </div>
  );
}
