import React, { useContext } from 'react'
import "./Sidebar.scss";
import Company from "../Company/Company"
import { companyCtx } from '../../contexts';

const Sidebar = () => {
    const companies = useContext(companyCtx)
    return (
        <div className="sideBar">
            Sidebar
            {companies.map((e, i) => { return <Company name={e.name} /> })}
        </div>
    )
}

export default Sidebar;
