import React, { useContext } from 'react'
import "./Sidebar.scss";
import Company from "../Company/Company"
import { companyCtx } from '../../contexts';

const Sidebar = ({changeReports}) => {
    const companies = useContext(companyCtx);


    return (
        <div className="sideBar">
            {companies.map((e, i) => { return <Company name={e.name} changeReports={changeReports}/> })}
        </div>
    )
}

export default Sidebar;
