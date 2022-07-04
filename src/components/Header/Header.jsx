import React, { useState } from "react";
import "./Header.scss";

const Header = (props) => {
  const [flag, setFlag] = useState(true);

  const { openLogin } = props;
  return (
    <div className={flag ? "header" : "header dark"}>
      <h1>APP(L)Y</h1>
      <button onClick={openLogin}>LOGIN</button>
    </div>
  );
};

export default Header;
