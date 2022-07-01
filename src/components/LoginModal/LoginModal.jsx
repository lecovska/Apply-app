import React from 'react';
import "./LoginModal.scss";

const LoginModal = () => {
    return (
        <div className="loginModal">
            LoginModal
           <label>User name: <input type="text" placeholder=""></input></label>
           <label>Password:   <input type="password" placeholder="" ></input></label>
        </div>
    )
}

export default LoginModal;
