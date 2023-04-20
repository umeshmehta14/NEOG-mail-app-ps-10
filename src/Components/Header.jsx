import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink
            className={({isActive}) => (!isActive ? "link" : "active")}
            to="/"
          >
            Inbox
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => !isActive ? "link" : "active"}
            to="/spam"
          >
            Spam
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive}) => (!isActive ? "link" : "active")}
            to="/trash"
          >
            Trash
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
