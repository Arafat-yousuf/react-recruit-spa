import React from 'react';
import './Cost.css'

const Cost = (props) => {
    const totalCost = props.cost.reduce((budget,app) => {
        return budget + parseInt(app.salary);
    },0)
    const companyYearlyBudget = 20000000;
    const totalYearlyCost = totalCost*12;
    return (
        <div className = "budget">
            <h3>Company Cost Review</h3>
            <p>Company Yearly Budget : {companyYearlyBudget} BDT</p>
            <p>Employee Recruited: {props.cost.length}</p>
            <p>Total Amount Payable Per Year: {totalYearlyCost} BDT</p>
            <p className="revenue">Company Yearly Revenue : {companyYearlyBudget - totalYearlyCost} BDT</p>
            
        </div>
    );
};

export default Cost;