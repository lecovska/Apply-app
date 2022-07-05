import React from "react";
import "./LoginModal.scss";

const LoginModal = (props) => {
  const { openLogin } = props;
  return (
    <div id="modal-container">
      <div id="content-div" className="">
        <div className="modal-image">

        </div>
        <div className="modal-form">
          <h1>LOGIN</h1>
          <label className="form-label"><b>Username:</b>
            <input type="text" placeholder="Type username" required="" />
          </label>


          <label className="form-label"><b>Password:</b>
            <input type="password" placeholder="Type password" required="" />
          </label>

          <button className="modal-button"> Submit </button>

        </div>
        <button className="close-modal" onClick={openLogin}>
        X
      </button>
      </div>

    </div>
  );
};

export default LoginModal;
