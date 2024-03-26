import React, {useEffect, useState} from 'react';
import '../styles/Budget.css';
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";

const Budget = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(!token)
        {
            navigate("/");
        }
    }, []);
    const [fixedBudget, setFixedBudget] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/budgetDisplay?fixedBudget=${fixedBudget}&numberOfDays=${numberOfDays}`;
    };

    return (
        <>
            <Navbar />
            <div className="budget-container"> {/* Add className */}
                <h2>Enter Budget Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group"> {/* Add className */}
                        <label htmlFor="fixedBudget">Fixed Budget:</label>
                        <input
                            type="number"
                            id="fixedBudget"
                            value={fixedBudget}
                            onChange={(e) => setFixedBudget(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group"> {/* Add className */}
                        <label htmlFor="numberOfDays">Number of Days:</label>
                        <input
                            type="number"
                            id="numberOfDays"
                            value={numberOfDays}
                            onChange={(e) => setNumberOfDays(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Budget;
