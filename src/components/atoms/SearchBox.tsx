import * as React from "react";
import "_scss/atoms/_searchBox";

const SearchBox = (): JSX.Element => (
  <div>
    <div className="searchBox">
      <label>
        <input type="text" />
        <button>検索</button>
      </label>
    </div>
  </div>
);
export default SearchBox;
