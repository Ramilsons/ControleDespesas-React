import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    return(
        // chamando o container que criamos
        <Card className="expenses">
            <ExpenseItem title={ props.items[0].title } date={ props.items[0].date } amount={ props.items[0].amount}></ExpenseItem>
            <ExpenseItem title={ props.items[1].title } date={ props.items[1].date } amount={ props.items[1].amount}></ExpenseItem>
            <ExpenseItem title={ props.items[2].title } date={ props.items[2].date } amount={ props.items[2].amount}></ExpenseItem>
            <ExpenseItem title={ props.items[3].title } date={ props.items[3].date } amount={ props.items[3].amount}></ExpenseItem>
        </Card>
    )
};

export default Expenses;