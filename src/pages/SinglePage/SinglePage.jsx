import React, { useContext } from "react";
import "./SinglePage.scss";
import Header from "../../components/Header/Header";
import ReportCard from "../../components/ReportCard/ReportCard";
import Footer from "../../components/Footer/Footer";
import { useRouteMatch } from "react-router-dom";
import { appCtx, reportCtx } from "../../contexts";



const SinglePage = () => {
  const match = useRouteMatch();
  // console.log(match);

  const candidates = useContext(appCtx)
  // console.log(candidates)

  const reports= useContext(reportCtx)
  // console.log(reports)

  const candidatesReports = reports.filter(e=>e.candidateId == match.params.id)
  console.log(candidatesReports)

  const singleCandidate = candidates.find(e => e.id == match.params.id)
  // console.log(singleCandidate)
  return (
    <div>
      <Header />
      {singleCandidate &&
        <div className="singlepage">
          <div className="bio">
            <h2>Personal information</h2>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg"></img>
            <p>Name:   {singleCandidate.name}</p>
            <p>Date:   {singleCandidate.birthday}</p>
            <p>Mail:   {singleCandidate.email}</p>
            <p>Education: {singleCandidate.education}</p>
            
          </div>

          <ReportCard candidateReports={candidatesReports}/>
        </div>
      }
      <Footer />
    </div>
  );
};
export default SinglePage;
