import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';

function Expenses(props){
    const [yearFilter, setYearFilter] = useState('2022');

    function yearChangeHandler(yearSelected){
        setYearFilter(yearSelected);
    }

    let allExpensesFiltered = props.items.filter(expense => expense.date.getFullYear().toString() === yearFilter);
    
    return(     
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} onYearChange={ yearChangeHandler }/>
            <ExpenseList expensesFiltered={allExpensesFiltered} />
        </Card>
    )
};

export default Expenses;