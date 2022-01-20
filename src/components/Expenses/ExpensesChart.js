import Chart from '../Chart/Chart';

function ExpenseChart(props){
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Fev', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Abr', value: 0 },
        { label: 'Mai', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Ago', value: 0 },
        { label: 'Set', value: 0 },
        { label: 'Out', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dez', value: 0 },
    ];

    for(const expense of props.expensesFiltered){
        let month = expense.date.getMonth(); // getMonth retorna o indice, ex: janeiro = 0
        
        chartDataPoints[month].value += expense.amount;
    }

    return(
        <Chart monthsData={chartDataPoints} />
    )
}

export default ExpenseChart;