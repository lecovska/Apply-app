import React, { useState } from "react";
import "./MainAdminPage.scss";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CompanyReport from "../../components/CompanyReport/CompanyReport";
import Footer from "../../components/Footer/Footer";
import ReportModal from "../../components/ReportModal/ReportModal";

const MainAdminPage = () => {
  const [activeReport, setActiveReport] = useState("Google");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeReports = (e) => {
    setActiveReport(e.target.innerText);
  };

  return (
    <div className="mainAdminPage">
      <Header />

      <div className="adminpage-img"></div>

      <div className="mainPart">
        <Sidebar changeReports={changeReports} />
        {isModalOpen && <ReportModal closeModal={closeModal} />}

        <CompanyReport activeReport={activeReport} openModal={openModal} />
      </div>
      <Footer />
    </div>
  );
};

export default MainAdminPage;
