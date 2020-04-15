import React from "react";

import Logo from "_components/atoms/Logo";
import SearchBox from "_components/atoms/SearchBox";
import NavMain from "_components/atoms/NavMain";
import MenuHeader from "_components/atoms/MenuHeader";
import NavHeader from "_components/atoms/NavHeader";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <SearchBox />
        <NavMain />
        <MenuHeader />
        <NavHeader />
      </header>
    );
  }
}
export default Header;
