import { BarChart } from '@mui/x-charts'

interface Props {
    yAxis: string[]
    xAxis: number[]
}

const ChartBar = ({yAxis, xAxis}:Props) => {

  return (
    <div className='barContainer'> 

    <BarChart
    margin={{left: 150}}
    yAxis={[{ scaleType: 'band', data: yAxis }]}
    series={[{ data: xAxis,
              color: '#f28e2c' }]}
    layout="horizontal"
    width={800}
    height={400}

    />
    
    </div>
  )
}

export default ChartBar