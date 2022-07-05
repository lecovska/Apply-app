import React, { useContext } from 'react'
import "./CompanyReport.scss";
import Eye from './svg-eye.svg'
import { reportCtx } from '../../contexts';
import moment from "moment"
import { companyCtx } from '../../contexts';

const CompanyReport = () => {
    const reports = useContext(reportCtx)
    const google = reports.filter(e=>e.companyName==="Google")
    const facebook = reports.filter(e=>e.companyName==="Facebook")
    const microsoft = reports.filter(e=>e.companyName==="Microsoft")
    const tesla = reports.filter(e=>e.companyName==="Tesla")
    const alphabet = reports.filter(e=>e.companyName==="Alphabet")

    return (
        <div className='main'>
        <div className="nav-bar">
                <input type="text" placeholder='search'/>
                <div className='nav-buttons'>
                <button className='toggle'> toggle</button>
                <button className='candidates'>Candidates</button>
                </div>
            </div>
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
        </div>
    )
}
export default CompanyReport;
