import React from "react";
import "./LoginModal.scss";

const LoginModal = (props) => {
  const { openLogin } = props;
  return (
    <div id="modal-container">
      <div id="content-div" className="">

        <label><b>Username:</b>
          <input type="text" placeholder="Type username"/>
        </label>

        
        <label><b>Password:</b>
          <input type="text" placeholder="Type password"/>
        </label>

        <button className="modal-button"> Login </button>

      </div>
      <button className="close-modal" onClick={openLogin}>
        X
      </button>
    </div>
  );
};

export default LoginModal;
