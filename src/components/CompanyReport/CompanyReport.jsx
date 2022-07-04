import React, { useContext } from 'react'
import "./CompanyReport.scss";
import Eye from './svg-eye.svg'
import { reportCtx } from '../../contexts';
import moment from "moment"

const CompanyReport = () => {
    const reports = useContext(reportCtx)

    const arr=["Ime","Datum","Status"];
    
    return (
        <div className="reportCompany">
            CompanyReport
            {reports.map((e,i)=>{return <div className="singleCompanyReport">
                <div className='name'>Name: {e.candidateName}</div>
                <div className='date'>Date: {moment(e.interviewDate).format('DD/MM/YYYY')}</div>
                <div className='status'>Status: {e.status}</div>
                <div className='buttons'>
                    <button>X</button>
                    <img src={Eye} alt="" /></div>
                </div>})};
        </div>
    )
}
export default CompanyReport;
