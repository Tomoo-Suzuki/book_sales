import * as React from "react";
import "_scss/molecules/_siteSwitcherFooter";

const SiteSwitcherFooter = (): JSX.Element => (
  <nav className="siteSwitcher_footer">
    <div>
      <ul>
        <li>
          <a href="/">BOOKMAで買う</a>
        </li>
        <li>
          <a href="/">BOOKMAで書く</a>
        </li>
        <li>
          <a href="/">BOOKMAで読む</a>
        </li>
      </ul>
    </div>
  </nav>
);
export default SiteSwitcherFooter;
