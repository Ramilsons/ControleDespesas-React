import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    // recebendo o objeto que foi criado no componente filho no parametro
    function saveExpenseDataHandler(enteredExpenseDate){
        const expensedData = {
            ...enteredExpenseData,
            id: Math.random().toString() // adicionando um id junto ao objeto recebido
        };

        // enviando todos o novo expenseData para o componente pai(App)
        props.onAddExpense(expensedData);
    };

    return(
        <div className='new-expense'>
            { /* Abaixo criamos um listener personalizado, ele será o responsavel por fazer a comunição dos dados do filho para o pai */ }
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;