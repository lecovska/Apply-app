import React from 'react'
import "./MainAdminPage.scss";
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import CompanyReport  from "../../components/CompanyReport/CompanyReport"
import Footer  from "../../components/Footer/Footer"

const MainAdminPage = () => {
    return (
        <div>
            MainAdminPage
            <Header/>
            <Sidebar/>
            <CompanyReport/>
            <Footer/>
        </div>
    )
}

export default MainAdminPage;
