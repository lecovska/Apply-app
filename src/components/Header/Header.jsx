import React, { useState } from "react";
import "./Header.scss";
import logo from "./logo.png"
import { Link } from "react-router-dom";

const Header = (props) => {
  const [flag, setFlag] = useState(true);

  const { openLogin } = props;
  return (
    <div className={flag ? "header" : "header dark"}>
     <Link to="/"><h1>APP<span className="title">L</span>Y</h1></Link>
      <button onClick={openLogin}>LOGIN</button>
    </div>
  );
};

export default Header;
