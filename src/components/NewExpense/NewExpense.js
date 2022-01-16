import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense(){

    // recebendo o objeto que foi criado no componente filho no parametro
    function saveExpenseDataHandler(enteredExpenseDate){
        const expensedDate = {
            ...enteredExpenseDate,
            id: Math.random().toString() // adicionando um id junto ao objeto recebido
        }

        console.log(expensedDate);
    }

    return(
        <div className='new-expense'>
            { /* Abaixo criamos um listener personalizado, ele será o responsavel por fazer a comunição dos dados do filho para o pai */ }
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;