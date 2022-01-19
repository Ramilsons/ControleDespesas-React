import './ExpenseForm.css';

import { useState } from 'react';

function ExpenseForm(props){
    
    /* Chamando de forma individual  */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); 

    /* Chamando múltiplos no mesmo bloco 
        const [userInput, setUserInput] = useState({
            enteredTitle: '',
            enteredDate: '',
            enteredAmount: ''
        }); 
    */

    function titleInputChangedHandler(event){     
        setEnteredTitle(event.target.value)
    };

    function amountInputChangedHandler(event){
        setEnteredAmount(event.target.value)
    };

    function dateInputChangedHandler(event){
        setEnteredDate(event.target.value);
    };

    function submitHandler(event){
        // fazendo com que não ocorra o reload da página(comportamento padrão)
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        // acessando a função configurada no pai e passando os dados que o usuário preencheu no form
        props.onSaveExpenseData(expenseData);

        // limpando os campos para uma UX melhor
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onStopEditing();
    };

    return (
        // onSubmit ocorre quando o usuário clica e tenta enviar o formulário
        <form onSubmit={ submitHandler }>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='titleInput'>Título</label>
                    <input value={ enteredTitle } type='text' id='titleInput' onChange={ titleInputChangedHandler } />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amountInput'>Valor</label>
                    <input value={ enteredAmount } type='number' id='amountInput' min='0.01' step='0.01' onChange={ amountInputChangedHandler } />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='dateInput'>Data</label>
                    <input value={ enteredDate } type='date' id='dateInput' min='2022-01-01' max='2022-12-31'  onChange={ dateInputChangedHandler } />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={ props.onStopEditing }>Cancelar</button>
                <button type='submit'>Adicionar Despesa</button>
            </div>
        </form>
    );
};

export default ExpenseForm;