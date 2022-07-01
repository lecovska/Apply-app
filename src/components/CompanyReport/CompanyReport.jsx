import React from 'react'
import "./CompanyReport.scss";

const CompanyReport = () => {

    const arr=["Ime","Datum","Status"];
    
    return (
        <div className="reportCompany">
            CompanyReport
            {arr.map((e,i)=>{return <div className="singleCompanyReport">{e}</div>})};
        </div>
    )
}
export default CompanyReport;
