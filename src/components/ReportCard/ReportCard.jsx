import React from 'react'
import "./ReportCard.scss";
import moment from 'moment';
import LoginModal from '../LoginModal/LoginModal';

const ReportCard = (props) => {
    return (
        <div className="reportCards">
           {props.candidateReports.map((e,i)=>
           {return <div className="singleReport">
            <div className='companyName'><h2>{e.companyName}</h2></div>
            <p><span  className='pesonal-info-list'>Interview date:</span> <span> {moment(e.interviewDate).format("DD.MM.YYYY")}</span></p>
            <p><span className='pesonal-info-list'>Phase:</span> <span>{e.phase}</span></p>
            <p><span className='pesonal-info-list'>Status: </span><span>{e.status}</span></p>
            <p><span className='pesonal-info-list'>Note:</span> <span>{e.note}</span></p>
            </div>})}
        </div>
    )
}

export default ReportCard;
