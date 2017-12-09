import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Chart from './Chart'
import Controls from './Controls'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartParams: {
        initialInvestment: 75000,
        pacMonth: 550,
        // pacMinusInsuranceCost: 470,
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
        illnessEventDate: 47 // remve: calculate from others
      }
    }

    this.handleRateOfReturnChange      = this.handleRateOfReturnChange.bind(this);
    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
    this.handlePacMonthChange          = this.handlePacMonthChange.bind(this);
    this.handlePrimaryCIAmountChange   = this.handlePrimaryCIAmountChange.bind(this);
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

  handlePacMonthChange(pacMonth) {
    let state = this.state;
    state.chartParams.pacMonth = pacMonth;
    this.setState(state);
  }

  handlePacMonthChange(pacMonth) {
    let state = this.state;
    state.chartParams.pacMonth = pacMonth;
    this.setState(state);
  }

  handlePrimaryCIAmountChange(primaryCIAmount) {
    let state = this.state;
    state.chartParams.primaryCIAmount = primaryCIAmount;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <section className="nav">
            <div className="container has-text-centered">
              <h1 className="title">
                Investments & Insurance Graph
              </h1>
            </div>
          </section>
      <div className="section" >
        <div className="container">

        <Chart chartParams={this.state.chartParams} />
        <Controls
          params={this.state.chartParams}

          onRateOfReturnChange={this.handleRateOfReturnChange}
          onInitialInvestmentChange={this.handleInitialInvestmentChange}
          onPacMonthChange={this.handlePacMonthChange}
          onPrimaryCIAmountChange={this.handlePrimaryCIAmountChange}

          />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
