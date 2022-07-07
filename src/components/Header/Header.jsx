import React, { useContext, useState } from "react";
import "./Header.scss";
import logo from "./logo.png";
import { Link, useHistory } from "react-router-dom";
import { tokenCtx } from "../../contexts";

const Header = (props) => {
  const [flag, setFlag] = useState(true);

  const { token, logout } = useContext(tokenCtx);
  const history = useHistory();
  const { openLogin } = props;
  return (
    <div className={flag ? "header" : "header dark"}>
      <Link to="/">
        <h1>
          APP<span className="title">L</span>Y
        </h1>
      </Link>
      {!token ? (
        <>
          <button onClick={openLogin}>LOGIN</button>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              history.push("/admin");
            }}
          >
            ADMIN
          </button>
          <button onClick={logout}>LOGOUT</button>
        </>
      )}
    </div>
  );
};

export default Header;
