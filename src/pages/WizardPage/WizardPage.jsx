import React from 'react'
import "./WizardPage.scss";
import Header from "../../components/Header/Header"
import Wizard from "../../components/Wizard/Wizard"
import Footer from "../../components/Footer/Footer"

const WizardPage = () => {
    return (
        <div>
            WizardPage
            <Header/>
            <Wizard/>
            <Footer/>
        </div>
    )
}

export default WizardPage;
