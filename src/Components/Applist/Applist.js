import React from 'react';
import './Applist.css';
import applicantsList from '../../applicants/applicants.json';
import { useState } from 'react';
import Applicant from "../Applicant/Applicant"
import Cost from '../Cost/Cost';
const Applist = () => {
    const [applicants, setapplicants] = useState(applicantsList);
    const [cost, setCost] = useState([]);

    const addcost = (newApplicant) => {
        const newCost = [...cost,newApplicant];
        setCost(newCost);
    }
    return (
        <div className = "app-list">
            <div className = "applicant-container">
            {
                applicants.map(applicant => <Applicant addcost ={addcost} applicant = {applicant}></Applicant> )
            }
            </div>
            
            <div className = "cost-container">
                <Cost cost = {cost}></Cost>
            </div>
            
        </div>
    );
};

export default Applist;