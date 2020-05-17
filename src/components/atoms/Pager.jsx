import React from "react";
import "_scss/atoms/_pager";

const Pager = () => {
  return (
    <div className="pagerWrap">
      <ul className="pager">
        <li className="first">
          <span></span>
        </li>
        <li className="before">
          <span></span>
        </li>
        <li className="num">
          <ul className="page_dynamic">
            <li>5</li>
            <li>6</li>
            <li className="current">7</li>
            <li>8</li>
            <li>9</li>
          </ul>
        </li>
        <li className="after">
          <span></span>
        </li>
        <li className="last">
          <span></span>
        </li>
      </ul>
    </div>
  );
};
export default Pager;
