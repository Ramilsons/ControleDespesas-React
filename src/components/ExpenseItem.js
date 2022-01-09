import './ExpenseItem.css';

function ExpenseItem() {

    const expenseTitle = 'Conta de água';
    const expenseDate = '08/01/2022';
    const expenseAmount = 265.00;

    return (
        <div className="expense-item">
            <div>{ expenseDate }</div>
            <div className="expense-item__description">
                <h2>{ expenseTitle }</h2>
                <div className="expense-item__price">R$ { expenseAmount }</div>
            </div>
        </div>
    );
}

export default ExpenseItem;