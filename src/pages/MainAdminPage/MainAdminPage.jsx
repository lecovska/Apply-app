import React from 'react'
import "./MainAdminPage.scss";
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import ReportModal from "../../components/ReportModal/ReportModal"
import CompanyReport  from "../../components/CompanyReport/CompanyReport"
import Footer  from "../../components/Footer/Footer"

const MainAdminPage = () => {
    return (
        <div className='mainAdminPage'>
            MainAdminPage
            <Header/>
            
            <div className='mainPart'>
            <Sidebar/>
            <ReportModal/>
            <CompanyReport/>
            </div>
            <Footer/>
        </div>
    )
}

export default MainAdminPage;
