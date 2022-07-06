import React, { useContext, useEffect, useState } from "react";
import "./LoginModal.scss";
import { tokenCtx } from "../../contexts";

const LoginModal = (props) => {
  const { closeLogin } = props;
  const { setToken, token } = useContext(tokenCtx);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const body = {
    email: username,
    password: password,
  };

  const submitLoginForm = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("hasToken", data.accessToken);
        setToken(data.accessToken);
      });
  };

  return (
    <div id="modal-container">
      <div id="content-div" className="">
        <div className="modal-image"></div>
        <div className="modal-form">
          <h1>LOGIN</h1>
          <label className="form-label">
            <b>Username:</b>
            <input
              type="text"
              placeholder="Type username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
          </label>

          <label className="form-label">
            <b>Password:</b>
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </label>

          <button className="modal-button" onClick={submitLoginForm}>
            Submit
          </button>
        </div>
        <button className="close-modal" onClick={closeLogin}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
