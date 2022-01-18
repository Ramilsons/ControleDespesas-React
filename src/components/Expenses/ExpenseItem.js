import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseItem__date';

function ExpenseItem(props) {
    return (
        // chamando o container que criamos
        <Card className="expense-item">
            <ExpenseDate date={props.date} /> 
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">R$ { props.amount }</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;