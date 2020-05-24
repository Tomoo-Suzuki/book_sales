import * as React from "react";
import ToTop from "_components/atoms/ToTop";
import SiteSwitcherFooter from "_components/atoms/SiteSwitcherFooter";
import MenuFooter from "_components/atoms/MenuFooter";
import Copyright from "_components/atoms/Copyright";

import "_scss/organisms/_footer";
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ToTop />
        <div className="footer_inner">
          <SiteSwitcherFooter />
          <MenuFooter />
          <Copyright />
        </div>
      </footer>
    );
  }
}
export default Footer;
