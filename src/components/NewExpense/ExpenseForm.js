import './ExpenseForm.css';

import { useState } from 'react';

function ExpenseForm(){
    
    /* Chamando de forma individual  
   
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); */

    /* Chamando múltiplos no mesmo bloco */
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: ''
    });

    function titleInputChangedHandler(event){
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    }

    function amountInputChangedHandler(event){
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
    }

    function dateInputChangedHandler(event){
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
    }


    return (
        <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label for='titleInput'>Título</label>
                <input type='text' id='titleInput' onChange={ titleInputChangedHandler } />
            </div>
            <div className='new-expense__control'>
                <label for='amountInput'>Valor</label>
                <input type='number' id='amountInput' min='0.01' step='0.01' onChange={ amountInputChangedHandler } />
            </div>
            <div className='new-expense__control'>
                <label for='dateInput'>Data</label>
                <input type='date' id='dateInput' min='2022-01-01' max='2022-12-31'  onChange={ dateInputChangedHandler } />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Adicionar Despesa</button>
        </div>
        </form>
    );
};

export default ExpenseForm;