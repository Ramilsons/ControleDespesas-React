import { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    // recebendo o objeto que foi criado no componente filho no parametro
    function saveExpenseDataHandler(enteredExpenseData){
        const expensedData = {
            ...enteredExpenseData,
            id: Math.random().toString() // adicionando um id junto ao objeto recebido
        };

        // enviando todos o novo expenseData para o componente pai(App)
        props.onAddExpense(expensedData);
    };

    function startEditingHandler(){
        setIsEditing(true);
    };

    function stopEditingHandler(){
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            { /* Se o isEditing for falso siginifica que form deve permanecer escondigo e o botão abaixo visivel */}
            { !isEditing && <button type='button' onClick={ startEditingHandler }>Add Nova Despesa</button> }
            { isEditing && <ExpenseForm onSaveExpenseData={ saveExpenseDataHandler} onStopEditing={ stopEditingHandler } /> }
        </div>
    )
}

export default NewExpense;