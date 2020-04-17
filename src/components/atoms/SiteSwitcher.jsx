import React from "react";
import Logo from "_components/atoms/Logo";

import "_scss/molecules/_siteSwitcher";

export default function SiteSwitcher(props) {
  return (
    <nav className="nav_siteSwicher">
      <Logo logoType="1" />
      <Logo logoType="2" />
    </nav>
  );
}
