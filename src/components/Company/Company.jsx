import React from 'react'
import "./Company.scss";

const Company = ({ name, changeReports }) => {

    return (
        <div className="company" onClick={changeReports}>
            {name}
        </div>
    )
}

export default Company;
