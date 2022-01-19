import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';

function ExpenseList(props){
    if(props.expensesFiltered.length === 0){
        return <h2 className='expenses-list__fallback'>Não há despesas nesse ano 🎊</h2>;   
    }

    return(         
        <ul>
            {/* rendenrizando lista de dados com condição */
            props.expensesFiltered.map(expense => (
                /* Devemos sempre adicionar key quando estamos fazendo o map em alguma lista. As chaves ajudam o React a identificar quais itens foram alterados, adicionados ou removidos Na maioria das vezes, você usaria IDs de seus dados como key */
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    date={expense.date}
                    amount={expense.amount} 
                /> 
            ))
            }
        </ul>
    )
};

export default ExpenseList;