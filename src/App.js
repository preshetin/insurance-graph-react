import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import Controls from './Controls'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartParams: {
        initialInvestment: 75000,
        pacMonth: 550,
        pacMinusInsuranceCost: 470,
        primaryCIAmount: 69000,
        secondaryCIAmount: 92000,
        primaryCICost: 33,
        secondaryCICost: 47,
        includePrimaryCIInsurace: true,
        insculdSecondaryCIInsurance: true,
        currentAgeYongest: 30,
        currentAgeOldest: 65,
        rateOfReturn: 0.05,
        ourFees: 0.005,
        theirFees: 0.023,
        primaryIllness: 1,
        secondaryIllness: 1,
        illnessEventDate: 47
      }
    }

    this.handleRateOfReturnChange = this.handleRateOfReturnChange.bind(this);
    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
  }

  handleRateOfReturnChange(rateOfReturn) {
    let state = this.state;
    state.chartParams.rateOfReturn = rateOfReturn;
    this.setState(state);
  }


  handleInitialInvestmentChange(initialInvestment) {
    let state = this.state;
    state.chartParams.initialInvestment = initialInvestment;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Investments & Insurance Graph</h1>
        </header>
        <Chart chartParams={this.state.chartParams} />
        <Controls
          rateOfReturn={this.state.chartParams.rateOfReturn}
          onRateOfReturnChange={this.handleRateOfReturnChange}
          initialInvestment={this.state.chartParams.initialInvestment}
          onInitialInvestmentChange={this.handleInitialInvestmentChange}

          />
      </div>
    );
  }
}

export default App;
