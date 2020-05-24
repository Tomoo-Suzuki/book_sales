import * as React from "react";

import Logo from "_components/atoms/Logo";
import SearchBox from "_components/atoms/SearchBox";
import SiteSwitcher from "_components/atoms/SiteSwitcher";
import MenuHeader from "_components/atoms/MenuHeader";
import NavHeader from "_components/atoms/NavHeader";

import "_scss/organisms/_header";
class Header extends React.Component {
  render() {
    return (
      <header className="headerBook">
        <div className="headerBook_inner">
          <div className="headerBook_inner_upper">
            <Logo logoType="0" className="logo" />
            <div>
              <MenuHeader />
              <SearchBox />
            </div>
            <SiteSwitcher />
          </div>
          <div className="headerBook_inner_lower">
            <NavHeader />
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
