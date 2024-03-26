import React, { useState, useEffect } from 'react';

const BudgetDisplay = (props) => {
    const { fixedBudget: initialFixedBudget, numberOfDays: initialNumberOfDays } = props.location.state || {};

    const [fixedBudget, setFixedBudget] = useState(initialFixedBudget || '');
    const [numberOfDays, setNumberOfDays] = useState(initialNumberOfDays || '');
    const [expense, setExpense] = useState('');
    const [remainingBudget, setRemainingBudget] = useState(initialFixedBudget || '');

    const handleAddExpense = () => {
        if (expense !== '') {
            setRemainingBudget(prevBudget => prevBudget - expense);
            setExpense('');
        }
    };

    useEffect(() => {
        setFixedBudget(initialFixedBudget);
        setNumberOfDays(initialNumberOfDays);
        setRemainingBudget(initialFixedBudget);
    }, [initialFixedBudget, initialNumberOfDays]);

    return (
        <div>
            <h2>Budget Display</h2>
            <div>
                <p>Fixed Budget: ${fixedBudget}</p>
                <p>Number of Days: {numberOfDays}</p>
                <p>Remaining Budget: ${remainingBudget}</p>
                <div>
                    <label htmlFor="expense">Enter Expense:</label>
                    <input
                        type="number"
                        id="expense"
                        value={expense}
                        onChange={(e) => setExpense(parseInt(e.target.value) || '')}
                    />
                    <button onClick={handleAddExpense}>Add Expense</button>
                </div>
            </div>
        </div>
    );
};

export default BudgetDisplay;
