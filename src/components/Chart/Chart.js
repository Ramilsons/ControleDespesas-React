import './Chart.css';

import ChartBar from './ChartBar';

function Chart(props){
    let totalAmountYear = 0;
    
    for(const month of props.monthsData){
        totalAmountYear+=month.value;
    }

    return(
        <div className='chart'>
            {
                props.monthsData.map(monthData => {
                    return <ChartBar key={ monthData.label } label={ monthData.label } fill={ monthData.value } total={ totalAmountYear } />
                })
            }
            <section>
                <h5>Total do Ano</h5>
                <h3>{ 'R$ '+totalAmountYear }</h3>
            </section>
        </div>
    );
}

export default Chart;