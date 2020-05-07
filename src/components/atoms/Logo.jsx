import React from "react";
import "_scss/atoms/_logo";
import { Link } from "react-router-dom";

export default function Logo(props) {
  let type;
  let link;
  if (props.logoType === "0") {
    type = "sale";
    link = "/";
  } else if (props.logoType === "1") {
    type = "upload";
    link = "http://localhost:8080/";
  } else if (props.logoType === "2") {
    type = "read";
    link = "/";
  }
  return (
    <a href={link} className="logo">
      <div className="imgWrap">
        <img src={`/img/logo_${type}.svg`} alt={`logo ${type}`} />
      </div>
    </a>
  );
}
