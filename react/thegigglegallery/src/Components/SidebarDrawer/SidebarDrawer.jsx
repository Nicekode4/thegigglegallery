import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { MenuStyle } from './Sidebar.style.js';
import { NavLink, useNavigate } from "react-router-dom"

export default props => {
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4242/category');
          if (!response.ok) {
            throw new Error('Failed to fetch books');
          }
          const data = await response.json();
          setCategory(data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <MenuStyle>
    <Menu>
<nav>
 <NavLink to={"/"}>Home</NavLink>
 {category.map(category => (
  <>
          <br />
        <NavLink to={category.name}>{category.name}</NavLink>
  </>

        ))}
</nav>
    </Menu>
    </MenuStyle>
  );
};