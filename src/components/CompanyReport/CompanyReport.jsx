import React, { useContext, useState } from "react";
import "./CompanyReport.scss";
import Eye from "./eyee.svg";
import { reportCtx, tokenCtx } from "../../contexts";
import moment from "moment";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

const CompanyReport = ({ activeReport, openModal }) => {
  const reports = useContext(reportCtx);
  const { token, setRefresh, refresh } = useContext(tokenCtx);
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const report = reports.filter((e) => e.companyName === activeReport);

  const [listView, setListView] = useState(true);

  const changeListView = () => {
    setListView(!listView);
  };

  const obj = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const createRreport = () => {
    history.push("/create-report");
  };

  const renderedSearch = report.filter((el) =>
    el.candidateName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="main">
      <div className="nav-bar">
        <input
          type="text"
          placeholder="Search candidate"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        />
        <div className="nav-buttons">
          <img
            className="toggle-button"
            src="https://icon-library.com/images/list-icon-png/list-icon-png-20.jpg"
            alt=""
            onClick={changeListView}
          ></img>
        </div>
      </div>
      <h2>{activeReport}</h2>

      <div className={listView ? "reportCompany" : "gridReportCompany"}>
        {renderedSearch &&
          renderedSearch.map((e, i) => {
            return (
              <div className="singleCompanyReport">
                <div className="name">Name: {e.candidateName}</div>
                <div className="date">
                  Date: {moment(e.interviewDate).format("DD/MM/YYYY")}
                </div>
                <div className="status">Status: {e.status}</div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      // const rep = reports.find((el) => el.id == e.id);
                      fetch(`http://localhost:3333/api/reports/${e.id}`, obj);
                      setRefresh(!refresh);
                    }}
                  >
                    X
                  </button>
                  <img src={Eye} alt="" onClick={openModal} />
                </div>
              </div>
            );
          })}
      </div>
      <button className="addNewReport" onClick={createRreport}>
        +
      </button>
    </div>
  );
};
export default CompanyReport;
