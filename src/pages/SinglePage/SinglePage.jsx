import React from 'react'
import "./SinglePage.scss";
import Header from "../../components/Header/Header"
import ReportCard from "../../components/ReportCard/ReportCard"
import ReportModal from "../../components/ReportModal/ReportModal"
import Footer from "../../components/Footer/Footer"

const SinglePage = () => {
    return (
        <div>
            SinglePage
            <Header />
            <div className="bio">
                <h2>Bio</h2>
                <img></img>
                
                <p>Name:</p>
                <p>Date:</p>
                <p>Mail:</p>
                <p>Education:</p>
                <p>Exp:</p>
            </div>
            <ReportCard />
            <ReportModal />
            <Footer />
        </div>
    )
}

export default SinglePage;
