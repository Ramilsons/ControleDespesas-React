import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [yearFilter, setYearFilter] = useState('2022');

    function yearChangeHandler(yearSelected){
        setYearFilter(yearSelected)
    }

    return(     
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} onYearChange={ yearChangeHandler }/>
            {/* rendenrizando lista de dados */}
            {props.items.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} /> )}
        </Card>
    )
};

export default Expenses;