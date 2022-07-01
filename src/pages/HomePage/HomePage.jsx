import React, { useState } from 'react'
import "./HomePage.scss";
import Header from "../../components/Header/Header"
import Candidates from "../../components/Candidates/Candidates"
import LoginModal from "../../components/LoginModal/LoginModal"
import Footer from "../../components/Footer/Footer"


const HomePage = () => {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(
            !showModal
        )
    }
    return (
        <div className="homepage">
            HomePage
            <Header />
            <Candidates />
            <LoginModal />
            <Footer />
        </div>
    )
}

export default HomePage;
