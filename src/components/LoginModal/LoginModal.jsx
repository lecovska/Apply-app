import React from "react";
import "./LoginModal.scss";

const LoginModal = (props) => {
  const { openLogin } = props;
  return (
    <div id="modal-container">
      <div id="content-div" className=""></div>
      <button className="close-modal" onClick={openLogin}>
        X
      </button>
    </div>
  );
};

export default LoginModal;
