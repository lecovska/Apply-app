import React from 'react'
import "./Sidebar.scss";
import Company from "../Company/Company"

const Sidebar = () => {
    const arr = ["google", "face", "amazon", "spotify"];
    return (
        <div className="sideBar">
            Sidebar
            {arr.map((e, i) => { return <Company name={e} /> })}
        </div>
    )
}

export default Sidebar;
