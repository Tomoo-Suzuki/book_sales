import React from "react";
import "_scss/atoms/_logo";
import { Link } from "react-router-dom";

const Logo = (props) => {
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
  const element =
    props.logoType === "0" ? (
      <h1 className="imgWrap">
        <img src={`/img/logo_${type}.svg`} alt={`logo ${type}`} />
      </h1>
    ) : (
      <div className="imgWrap">
        <img src={`/img/logo_${type}.svg`} alt={`logo ${type}`} />
      </div>
    );
  return (
    <a href={link} className="logo">
      {element}
    </a>
  );
};
export default Logo;
