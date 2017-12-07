import React from 'react'
import {LineChart, Label, ReferenceDot, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


class Chart extends React.Component {
  render() {

    let ages = Array.from(Array(66).keys()).slice(30);
    let data = [];

    let initialInvestment = 75000;
    let pacMonth = 550;
    let pacMinusInsuranceCost = 470;
    let primaryCIAmount = 69000;
    let secondaryCIAmount = 92000;
    let includePrimaryCIInsurace = true;
    let insculdSecondaryCIInsurance = true;

    let currentAgeYongest = 30;
    let currentAgeOldest = 65;
    let rateOfReturn = 0.5;
    let ourFees = 0.5;
    let theirFees = 0.023;
    let primaryIllness = 1;
    let secondaryIllness = 1;
    let illnessEventDate = 47;


    ages.forEach( age => {

      let ourPlan;
      let mutualFunds;
      if (age == 30) {
        ourPlan = 200;
        mutualFunds = 200;
      } else {
        ourPlan = 300 + age * (this.props.rateOfReturn);
        mutualFunds = 200 + age * (0.7 * this.props.rateOfReturn);
      }

      data.push({
        name: age,
        ourPlan,
        mutualFunds
      })
    });

    return (
      <LineChart width={600} height={300} data={data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}} className="Chart">
             <XAxis dataKey="name">
              <Label value="Pages of my website" offset={0} position="insideBottom" />
             </XAxis>
             <YAxis domain={[0, 2000]}  />
             <CartesianGrid strokeDasharray="3 3"/>
             <Tooltip/>
             <Legend />
             <Line type="monotone" dataKey="mutualFunds" stroke="#8884d8" activeDot={{r: 8}}/>
             <Line type="monotone" dataKey="ourPlan" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

export default Chart
