import './ChartBar.css';

function ChartBar(props){
  let fillPercent = '0%';

  if(props.total > 0){
    fillPercent = (props.fill / props.total) * 100 + '%';
  }
  console.log(fillPercent);

  return(
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill'
          style={{height: fillPercent}}
        >
        </div>
      </div>
      <div className='chart-bar__label'>{ props.label }</div>
    </div>
  )
}

export default ChartBar;