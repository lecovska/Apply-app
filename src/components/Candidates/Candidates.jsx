import React, { useContext } from "react";
import "./Candidates.scss";
import { appCtx } from "../../contexts";
import { Link, useRouteMatch } from "react-router-dom";

const Candidates = () => {
  const candidates = useContext(appCtx);

  return (
    <div className="candidates">
      {candidates.map((e, i) => {
        return (
          <Link to={`/candidate/${e.id}`}>
            <div className="candidateCard" key={i}>
              <img className="candidate-img" src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg" alt="img" />
              <h2>{e.name}</h2>
              <p>{e.email}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Candidates;
