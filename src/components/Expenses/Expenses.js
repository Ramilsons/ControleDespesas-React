import './Expenses.css';

import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const [yearFilter, setYearFilter] = useState('2022');

    function yearChangeHandler(yearSelected){
        setYearFilter(yearSelected);
    }

    let allExpensesFiltered = props.items.filter(expense => expense.date.getFullYear().toString() === yearFilter);
   
    return(     
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} onYearChange={ yearChangeHandler }/>
            {
            /* rendenrizando lista de dados com condição */
            allExpensesFiltered.length == 0 ? <p>Não há despesas nesse ano 🎊</p> : allExpensesFiltered.map(expense => (
                    /* 
                        Devemos sempre adicionar key quando estamos fazendo o map em alguma lista. 
                        As chaves ajudam o React a identificar quais itens foram alterados, adicionados ou removidos 
                        Na maioria das vezes, você usaria IDs de seus dados como key
                    */
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        date={expense.date}
                        amount={expense.amount} 
                    /> 
                ))
            }

        </Card>
    )
};

export default Expenses;