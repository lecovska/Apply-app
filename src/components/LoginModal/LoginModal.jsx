import React, { useContext, useEffect, useState } from "react";
import "./LoginModal.scss";
import { tokenCtx } from "../../contexts";
import { useHistory } from "react-router-dom";

const LoginModal = (props) => {
  const { closeLogin } = props;
  const { setToken, token } = useContext(tokenCtx);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const body = {
    email: username,
    password: password,
  };
  const history = useHistory();

  const submitLoginForm = () => {
    fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setError("Incorrect pass or email");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.accessToken);
        localStorage.setItem("hasToken", data.accessToken);
        setToken(data.accessToken);
        history.push("/admin");
        closeLogin();
      });
  };

  const style = {
    color: "red",
  };

  return (
    <div id="modal-container">
      <div id="content-div" className="">
        <div className="modal-image"></div>
        <div className="modal-form">
          <h1>LOGIN</h1>
          <p style={style}>{error}</p>
          <label className="form-label">
            Username:
            <input
              className="input-login"
              type="text"
              placeholder="Type username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
          </label>

          <label className="form-label">
            Password:
            <input
              className="input-login"
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
