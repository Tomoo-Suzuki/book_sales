import React from "react";
import "_scss/atoms/_searchBox";

export default function SearchBox(props) {
  return (
    <div>
      <div className="searchBox">
        <label>
          <input type="text" />
          <button>検索</button>
        </label>
      </div>
    </div>
  );
}
