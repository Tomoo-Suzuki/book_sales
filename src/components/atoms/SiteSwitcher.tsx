import * as React from "react";
import Logo from "_components/atoms/Logo";

import "_scss/molecules/_siteSwitcher";

const SiteSwitcher = (): JSX.Element => (
  <nav className="nav_siteSwicher">
    <Logo logoType="1" />
    <Logo logoType="2" />
  </nav>
);
export default SiteSwitcher;
