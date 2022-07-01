import React from 'react'
import "./Wizard.scss";
import Step1 from "../Step1/Step1"
import Step2 from "../Step2/Step2"
import Step3 from "../Step3/Step3"

const Wizard = () => {
    return (
        <div>
            Wizard
            <Step1/>
            <Step2/>
            <Step3/>
        </div>
    )
}

export default Wizard
