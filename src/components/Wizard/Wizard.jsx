import React, { useContext, useState } from "react";
import "./Wizard.scss";
import { appCtx, companyCtx, tokenCtx } from "../../contexts";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Wizard = () => {
  const candidates = useContext(appCtx);
  const companies = useContext(companyCtx);
  const { token, setRefresh, refresh } = useContext(tokenCtx);

  const [body, setBody] = useState({
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
    candidateName: "",
    candidateId: "",
    companyName: "",
    companyId: "",
  });
  const history = useHistory();

  const pushReports = () => {
    fetch("http://localhost:3333/api/reports", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    setRefresh(!refresh);
    history.push("/admin");
  };

  return (
    <div className="wizard">
      <div className="form-wrapper">
        <h5>Create report</h5>

        <p>Choose candidate:</p>
        <select
          onChange={(e) => {
            const ime = e.target.value;
            const cand = candidates.find((el) => el.name == ime);
            setBody({ ...body, candidateName: ime, candidateId: cand.id });
          }}
        >
          <option value="">SELECT CANDIDATE</option>
          {candidates.map((e) => {
            return <option>{e.name}</option>;
          })}
        </select>

        <p>Choose company:</p>
        <select
          onChange={(e) => {
            const ime = e.target.value;
            const comp = companies.find((el) => el.name == ime);
            setBody({ ...body, companyName: ime, companyId: comp.id });
          }}
        >
          <option value="">SELECT COMPANY</option>

          {companies.map((e) => {
            return <option>{e.name}</option>;
          })}
        </select>

        <p>Date:</p>
        <input
          id="form-input"
          type="date"
          onChange={(event) => {
            setBody({
              ...body,
              interviewDate: event.target.value,
            });
          }}
        />

        <p>Phase:</p>
        <input
          id="form-input"
          type="text"
          onChange={(event) => {
            setBody({ ...body, phase: event.target.value });
          }}
        />

        <p>Satus:</p>
        <input
          id="form-input"
          type="text"
          onChange={(event) => {
            setBody({ ...body, status: event.target.value });
          }}
        />
      </div>

      <div className="note">
        <textarea
          className="textarea"
          cols="20"
          rows="18"
          placeholder="Note..."
          onChange={(event) => {
            setBody({ ...body, note: event.target.value });
          }}
        ></textarea>

        <button className="create-report-button" onClick={pushReports}>
          Create report
        </button>
      </div>
    </div>
  );
};

export default Wizard;
