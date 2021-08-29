import React from "react";
import classes from "./Container.module.css";

const Container: React.FC<{ className: string }> = (props) => {
  return (
    <div className={`${classes.container} ${classes[props.className]}`}>
      {props.children}
    </div>
  );
};

export default Container;
