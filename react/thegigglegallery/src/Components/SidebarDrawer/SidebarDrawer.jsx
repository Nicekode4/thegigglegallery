import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MenuStyle } from './Sidebar.style.js';
import { NavLink, useNavigate } from "react-router-dom"

export default props => {
    const navigate = useNavigate();
  
  return (
    <MenuStyle>
    <Menu>
<nav>
 <NavLink to={"/"}></NavLink>
</nav>
    </Menu>
    </MenuStyle>
  );
};