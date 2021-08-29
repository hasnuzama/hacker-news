import React from "react";
import MainHeader from "./MainHeader";

const Layout: React.FC = (props) => {
  return (
    <div>
      <MainHeader></MainHeader>
      {props.children}
    </div>
  );
};

export default Layout;
