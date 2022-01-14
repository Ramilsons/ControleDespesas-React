import './ExpenseItem.css';

import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseItem__date';

function ExpenseItem(props) {

    // o useState deve receber com parametro o valor padrão
    const [title, setTitle] = useState(props.title);
    // o useSate retorna um array com dois elementos. O primeiro é o valor atual(nesse caso chamamos de title)
    // o segundo elemento é a função que atualizará o valor, nesse caso chamamos de setTitle

    function changeTitle(){
        setTitle('Título atualizado pelo useState');
    }

    return (
        // chamando o container que criamos
        <Card className="expense-item">
            <ExpenseDate date={props.date} /> 
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">R$ { props.amount }</div>
            </div>

            <button onClick={ changeTitle }>Atualizar título</button>
        </Card>
    );
}

export default ExpenseItem;