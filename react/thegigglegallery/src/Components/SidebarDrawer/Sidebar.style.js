import styled from "styled-components";

export const MenuStyle = styled.div`
overflow: scroll;
/* Position and sizing of burger button */
.bm-burger-button {
  position: sticky;
  width: 36px;
  height: 30px;
  left: 8vw;
  margin-top: 2rem;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 10vh;
  width: 10rem;
  left: 8.5rem;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;

  color: #d1d1d1;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #ffffff;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .bm-burger-button {
  position: sticky;
  width: 36px;
  height: 30px;
  left: 45vw;

  margin-bottom: 2rem;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: black;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 10vh;
  width: 10rem;
  left: 8.5rem;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
    border-color: black;
    border-width: 2px;
    border-top: 1px black;
  padding: 2.5em 0em 0;
  font-size: 1.15em;
  
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: black
  padding: 0.8em;
}

/* Individual item */
.bm-item {
  display: inline-block;

  color: #d1d1d1;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #ffffff;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

}
`