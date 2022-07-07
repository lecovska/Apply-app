import React from 'react'
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="person">
                <img className="person-img"src='https://media-exp1.licdn.com/dms/image/C5603AQF217GGVjbxNg/profile-displayphoto-shrink_800_800/0/1631959104994?e=1662595200&v=beta&t=YI_eb4VvS3OY54tKEYxECnMPVKh56cWook9_fONOcXk' alt=''></img>
                <p>Dalibor Gavrilović</p>
                <p>gavra43@gmail.com</p>
            </div>
            <div className="person">
                <img className="person-img"src='https://media-exp1.licdn.com/dms/image/C4E03AQH6ljzgRkns8A/profile-displayphoto-shrink_800_800/0/1600764231741?e=1662595200&v=beta&t=HA11uaDPqwTna7V_hQm9UA4LkI52h4F6zDfGNN4P0MQ' alt=''></img>
                <p>Teodora Lečovska</p>
                <p>lecovska@gmail.com</p>
            </div>
            <div className="person">
                <img className="person-img"src='https://media-exp1.licdn.com/dms/image/C4E03AQFlWTnIEyn0UQ/profile-displayphoto-shrink_800_800/0/1611414371400?e=1662595200&v=beta&t=Tb4mIaLmgHBtGOEpbKSsPmEStUEXPYOraFon4F8oY4w' alt=''></img>
                <p>Martin Potkonjak</p>
                <p>mar.potkonjak@gmail.com</p>
            </div>
            <div className="person">
                <img className="person-img"src='https://media-exp1.licdn.com/dms/image/C4E03AQEOBqEX2XAicw/profile-displayphoto-shrink_800_800/0/1625867114405?e=1662595200&v=beta&t=v-Nhn39-WDkRXmOo3YNy1LZmcFnOdgjKncFIdmFpqvg' alt=''></img>
                <p>Anja Vlačić</p>
                <p>anjavlacic75@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer;
