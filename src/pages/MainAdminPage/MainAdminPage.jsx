import React, { useState } from "react";
import "./MainAdminPage.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyReport from "../../components/CompanyReport/CompanyReport";
import Footer from "../../components/Footer/Footer";

const MainAdminPage = () => {
  const [activeReport, setActiveReport] = useState("Google");

  const changeReports = (e) => {
    setActiveReport(e.target.innerText);
  };

  return (
    <div className="mainAdminPage">
      <Header />

      <div className="mainPart">
        <Sidebar changeReports={changeReports} />

        <CompanyReport activeReport={activeReport} />
      </div>
      <Footer />
    </div>
  );
};

export default MainAdminPage;
