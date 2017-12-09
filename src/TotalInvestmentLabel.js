import React from 'react'
import {Text} from 'recharts'

class TotalInvestmentLabel extends React.Component {

  render () {
    const {x, y, stroke, value, index} = this.props;
    const result =  value.toLocaleString('en-US', { style: 'currency', currency: "USD", maximumFractionDigits : 0, minimumFractionDigits : 0 });;

    if (index === 34 ) {
      return <Text x={x} y={y} dy={-4} fill={stroke} fontSize={20} textAnchor="end">{result}</Text>
    }
    return null;
  }
}

export default TotalInvestmentLabel
