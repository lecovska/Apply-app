import React, { useContext, useState } from "react";
import "./CompanyReport.scss";
import Eye from "./svg-eye.svg";
import { reportCtx } from "../../contexts";
import moment from "moment";
import { Link } from "react-router-dom";

const CompanyReport = ({ activeReport }) => {
  const reports = useContext(reportCtx);

  const report = reports.filter((e) => e.companyName === activeReport);

  const [listView, setListView] = useState(true);

  const changeListView = () => {
    setListView(!listView);
  };

  return (
    <div className="main">
      <div className="nav-bar">
        <input type="text" placeholder="search" />
        <div className="nav-buttons">
          <button className="toggle" onClick={changeListView}>
            toggle
          </button>
          <Link to="/">
            <button className="candidates-button">Candidates</button>
          </Link>
        </div>
      </div>
      <h2>{activeReport}</h2>

      <div className={listView ? "reportCompany" : "gridReportCompany"}>
        {report.map((e, i) => {
          return (
            <div className="singleCompanyReport">
              <div className="name">Name: {e.candidateName}</div>
              <div className="date">
                Date: {moment(e.interviewDate).format("DD/MM/YYYY")}
              </div>
              <div className="status">Status: {e.status}</div>
              <div className="buttons">
                <button>X</button>
                <img src={Eye} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CompanyReport;
