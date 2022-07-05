import React, { useContext, useState } from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Candidates from "../../components/Candidates/Candidates";
import LoginModal from "../../components/LoginModal/LoginModal";
import Footer from "../../components/Footer/Footer";

const HomePage = (props) => {
  const { openLogin, openLoginModal } = props;

  return (
    <div className="homepage">
     
      <Header openLogin={openLogin} />
      <div className="image">
        <span>APPLY FOR FUTURE</span>
      </div>

      <h1 className="candidate-title">CANDIDATES</h1>
     
      <Candidates />
      {openLoginModal && <LoginModal openLogin={openLogin} />}
      <Footer />
    </div>
  );
};

export default HomePage;
