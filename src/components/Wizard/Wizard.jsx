import React, { useContext } from "react";
import "./Wizard.scss";
import { appCtx, companyCtx } from "../../contexts";

const Wizard = () => {
  const candidates = useContext(appCtx);
  const companies = useContext(companyCtx);

  return (
    <div className="wizard">

      <div className="form-wrapper">
      <h5>Create report</h5>

        <p>Choose candidate:</p>
        <select>
          {candidates.map((e) => {
            return <option>{e.name}</option>;
          })}
        </select>

        <p>Choose company:</p>
        <select>
          {companies.map((e) => {
            return <option>{e.name}</option>;
          })}
        </select>

        <p>Date:</p>
        <input id="form-input" type="date" />

        <p>Phase:</p>
        <input id="form-input" type="text" />

        <p>Satus:</p>
        <input id="form-input" type="text" />
      </div>

      <div className="note">
        
        <textarea className="textarea"cols="20" rows="25"
        
         
          placeholder="Note..."
        ></textarea>

        <button className="create-report-button">Create report</button>
      </div>
      
    </div>
  );
};

export default Wizard;
