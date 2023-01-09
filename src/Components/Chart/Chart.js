

import ChartBar from './ChartBar'
import './chart.css'

function Chart (props) {    
    const dataPointValue = props.dataPoints.map((datapointss ) => {
        return datapointss.value
    })

    const totalMax = Math.max(...dataPointValue)

    return (

        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
                 return <ChartBar
                  key={dataPoint.label}
                  value= {dataPoint.value} 
                  maxValue = {totalMax} 
                  label={dataPoint.label} />
            })}
        </div>

    )

}

export default Chart