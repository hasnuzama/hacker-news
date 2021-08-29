import classes from "./MainHeader.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader: React.FC = (props) => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/stories/top" activeClassName={classes.active}>
        Tops stories
      </NavLink>
      <NavLink to="/stories/new" activeClassName={classes.active}>
        New stories
      </NavLink>
      <NavLink to="/stories/best" activeClassName={classes.active}>
        Best stories
      </NavLink>
    </nav>
  );
};

export default MainHeader;
