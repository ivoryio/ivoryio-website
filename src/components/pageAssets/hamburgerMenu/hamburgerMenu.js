import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../../../customStyles/pageAssets/hamburgerMenu.css'


export default props => {
  return (
    <Menu {...props} right>
      <a className="menu-item" href="/">
        HOME
      </a>

      <a className="menu-item" href="/businessPage">
        FOR BUSINESS
      </a>

      <a className="menu-item" href="/developerPage">
        FOR DEVELOPERS
      </a>

      <a className="menu-item" href="/contact">
        CONTACT
      </a>
    </Menu>
  );
};