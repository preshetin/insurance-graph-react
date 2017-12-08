import React from 'react'
import {LineChart, Label, ReferenceDot, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import prepareData from './prepareData'


class Chart extends React.Component {
  render() {

    const data = prepareData(this.props.chartParams);

    return (
      <LineChart width={600} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}} className="Chart">
             <XAxis dataKey="name" />
             <YAxis domain={[0, 1000000]}  />
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="ourPlan" stroke="#82ca9d" />
             <Line type="monotone" dataKey="mutualFunds" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
  }
}

export default Chart
