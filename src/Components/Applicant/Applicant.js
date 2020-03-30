import React, { useState } from 'react';
import './Applicant.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserCheck } from '@fortawesome/free-solid-svg-icons'
const Applicant = (props) => {
    const { name, photo, designation, salary, experience } = props.applicant;
    const [isEnlisted, setIsEnlisted] = useState(false);
    let enlistButton = <button onClick={() => { props.addcost(props.applicant); setIsEnlisted(true) }} className="enlist-btn"><FontAwesomeIcon icon={faUserPlus} /> Enlist</button>;
    let enlistname = <h3 className="enlist-name">{name}</h3>
    if (isEnlisted) {
        enlistButton = <button className="enlisted-btn" disabled><FontAwesomeIcon icon={faUserCheck} /> Enlisted</button>;
        enlistname = <h3 className="enlisted-name">{name}</h3>
    }
    return (
        <div className="applicant">
            <div className="applicant-img">
                <img src={photo} alt="" />
            </div>

            <div className = "applicant-details">
                {enlistname}
                <p>Designaton: {designation}</p>
                <p>Salary : {salary} BDT</p>
                <p>Experience: {experience} Years</p>
                {enlistButton}
            </div>


        </div>
    );
};

export default Applicant;