import React from "react";
import ToTop from "_components/atoms/ToTop";
import NavFooter from "_components/atoms/NavFooter";
import MenuFooter from "_components/atoms/ItemCount";
import Copyright from "_components/atoms/Copyright";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ToTop />
        <NavFooter />
        <MenuFooter />
        <Copyright />
      </footer>
    );
  }
}
export default Footer;
