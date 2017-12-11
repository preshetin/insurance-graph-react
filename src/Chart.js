import React from 'react'
import {LineChart, ResponsiveContainer,  Label, ReferenceDot, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import {Panel} from 'react-bootstrap/lib';
import prepareData from './prepareData';
import TotalInvestmentLabel from './TotalInvestmentLabel'

class Chart extends React.Component {
  render() {

    const data = prepareData(this.props.chartParams);

    const showAtIndex = parseInt(this.props.chartParams.retirementAge) - parseInt(this.props.chartParams.currentAge) - 1;

    return (
      <Panel>
      <div style={{  width: '100%', height: '400px' }}>
        <ResponsiveContainer>
          <LineChart width={900} height={400} data={data}
                      margin={{top: 25, right: 30, left: 30, bottom: 25}}
                      style={{margin : "0 auto"}}
                       >
                 <XAxis dataKey="name" />
                 <YAxis domain={[0, 'auto']}  />
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="ourPlan" points={[{x: 12, y: 12, value: 240}]} stroke="#82ca9d" label={<TotalInvestmentLabel showAtIndex={showAtIndex} />} />
                 <Line type="monotone" dataKey="mutualFunds" stroke="#8884d8" label={<TotalInvestmentLabel showAtIndex={showAtIndex} />}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
      </Panel>
    );
  }
}

export default Chart
