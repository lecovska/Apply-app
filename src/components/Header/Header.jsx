import React, { useState } from 'react'
import "./Header.scss";

const Header = () => {
    const [flag, setFlag] = useState(true);
    return (
        <div className={flag ? "header" : "header dark"}>

            <h1>APP(L)Y</h1>
            <button>LOGIN</button>
        </div>
    )
}

export default Header;
