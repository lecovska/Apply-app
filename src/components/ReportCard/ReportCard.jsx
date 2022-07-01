import React from 'react'
import "./ReportCard.scss";
const ReportCard = () => {
    return (
        <div className="reportCards">
           {[1,2,3,4,5,6].map((e,i)=>{return <div className="singleReport">{e}</div>})}
        </div>
    )
}

export default ReportCard;
