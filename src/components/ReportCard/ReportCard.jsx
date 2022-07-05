import React from 'react'
import "./ReportCard.scss";
const ReportCard = (props) => {
    return (
        <div className="reportCards">
           {props.candidateReports.map((e,i)=>
           {return <div className="singleReport">
            <h2>{e.companyName}</h2>
            <p>Interview date:{e.interviewDate}</p>
            <p><span>Note:</span> {e.note}</p>
            <p>Phase: {e.phase}</p>
            <p>Status: {e.status}</p>
            </div>})}
        </div>
    )
}

export default ReportCard;
