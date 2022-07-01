import React from 'react'
import "./Company.scss";

const Company = ({ name }) => {
    return (
        <div className="company">
            {name}
        </div>
    )
}

export default Company;
