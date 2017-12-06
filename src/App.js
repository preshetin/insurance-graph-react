import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartInputs extends Component {

  constructor(props) {
    super(props);
    this.handleRateOfReturnChange = this.handleRateOfReturnChange.bind(this);
  }

  handleRateOfReturnChange(e) {
    this.props.onRateOfReturnChange(e.target.value);
  }

  render() {
    return (
      <div>
      <label>Rate of Return</label>
      <input type="number" value={this.props.rateOfReturn} onChange={this.handleRateOfReturnChange}  placeholder="Rate of Return" />
      </div>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rateOfReturn: 0.5
    }
    this.handleRateOfReturnChange = this.handleRateOfReturnChange.bind(this);
  }

  handleRateOfReturnChange(rateOfReturn) {
    this.setState({ rateOfReturn });
  }

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
        ourPlan = 300 + age * (this.state.rateOfReturn);
        mutualFunds = 200 + age * (0.7 * this.state.rateOfReturn);
      }

      data.push({
        name: age,
        ourPlan,
        mutualFunds
      })
    });


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <LineChart width={600} height={300} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="name"/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="monotone" dataKey="mutualFunds" stroke="#8884d8" activeDot={{r: 8}}/>
               <Line type="monotone" dataKey="ourPlan" stroke="#82ca9d" />
        </LineChart>
        <ChartInputs rateOfReturn={this.state.rateOfReturn} onRateOfReturnChange={this.handleRateOfReturnChange}  />
      </div>
    );
  }
}

export default App;
