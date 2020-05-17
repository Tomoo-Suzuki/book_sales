import React from "react";
import "_scss/atoms/_displayNum";

const DisplayNum = () => {
  return (
    <div className="displayNumBox">
      <p className="ttl_displayNum">表示件数 : </p>
      <ul className="displayNum">
        <li>10</li>
        <li>20</li>
        <li>30</li>
      </ul>
    </div>
  );
};
export default DisplayNum;
