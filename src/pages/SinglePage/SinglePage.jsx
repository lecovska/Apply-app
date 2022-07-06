import React, { useContext } from "react";
import "./SinglePage.scss";
import Header from "../../components/Header/Header";
import ReportCard from "../../components/ReportCard/ReportCard";
import Footer from "../../components/Footer/Footer";
import { useRouteMatch } from "react-router-dom";
import { appCtx, reportCtx } from "../../contexts";
import moment from "moment";
import LoginModal from "../../components/LoginModal/LoginModal";

const SinglePage = (props) => {
  const { openLogin, openLoginModal } = props;

  const match = useRouteMatch();
  // console.log(match);

  const candidates = useContext(appCtx);
  // console.log(candidates)

  const reports = useContext(reportCtx);
  // console.log(reports)

  const candidatesReports = reports.filter(
    (e) => e.candidateId == match.params.id
  );

  const singleCandidate = candidates.find((e) => e.id == match.params.id);
  // console.log(singleCandidate)
  return (
    <div>
      <Header openLogin={openLogin} />
      {singleCandidate && (
        <div className="singlepage">
          <div className="singlepage-wrapper">
            <div className="bio">
              <h2>Personal information</h2>
              <img
                className="bio-image"
                src="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
                alt=""
              ></img>
            </div>
            <div className="personal-info">
              <p>
                <span>Name: </span>
                <span>{singleCandidate.name}</span>
              </p>
              <p>
                <span>Date: </span>
                <span>
                  {moment(singleCandidate.birthday).format("DD.MM.YYYY")}
                </span>
              </p>
              <p>
                <span>Mail: </span> <span>{singleCandidate.email}</span>
              </p>
              <p>
                <span>Education: </span>
                <span>{singleCandidate.education}</span>
              </p>
            </div>
          </div>

          <ReportCard candidateReports={candidatesReports} />
        </div>
      )}

      {openLoginModal && <LoginModal openLogin={openLogin} />}
      <Footer />
    </div>
  );
};
export default SinglePage;
