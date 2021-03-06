import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../../../customStyles/pageAssets/hamburgerMenu.css'

import icon_contact from '../../../images/icon_contact.svg'
import icon_for_businesses from '../../../images/icon_for_businesses.svg'
import icon_home from '../../../images/icon_home.svg'
import icon_for_developers from '../../../images/icon_for_developers.svg'

export default props => {
  return (
    <Menu {...props} right>
      <a className="menu-item" href="/">
      <img alt='' className={'menu_icons'} src={icon_home} />
        HOME
      </a>

      <a className="menu-item" href="/businessPage">
      <img alt='' className={'menu_icons'}  src={icon_for_businesses} />
        FOR BUSINESS
      </a>

      <a className="menu-item" href="/developerPage">
      <img alt='' className={'menu_icons'}  src={icon_for_developers} />
        FOR DEVELOPERS
      </a>

      <a className="menu-item" href="/contact">
      <img alt='' className={'menu_icons'}  src={icon_contact} />
        CONTACT
      </a>
    </Menu>
  );
};