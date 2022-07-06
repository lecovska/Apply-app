import React, { useContext } from 'react'
import "./Sidebar.scss";
import Company from "../Company/Company"
import { companyCtx } from '../../contexts';

const Sidebar = ({changeReports}) => {
    const companies = useContext(companyCtx);


    return (
        <div className="sideBar">
            {/* <img className='sidebar-img' src='https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'/><span>Choose company:</span> */}
            {companies.map((e, i) => { return <Company name={e.name} changeReports={changeReports}/> })}
        </div>
    )
}

export default Sidebar;
