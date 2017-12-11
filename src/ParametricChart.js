import React from 'react';
import Chart from './Chart';
import Controls from './Controls';

class ParametricChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chartParams: {
        initialInvestment: 75000,
        pacMonth: 550,
        primaryCIAmount: 69000,
        secondaryCIAmount: 92000,
        primaryCICost: 33,
        secondaryCICost: 47,
        includePrimaryCIInsurace: true,
        includeSecondaryCIInsurance: true,
        currentAgeYongest: 30,
        currentAgeOldest: 65,
        rateOfReturn: 0.05,
        ourFees: 0.005,
        theirFees: 0.023,
        primaryIllness: 1,
        secondaryIllness: 1,
        illnessEventDate: 47 // remove: calculate from others
      }
    }

    this.handleRateOfReturnChange      = this.handleRateOfReturnChange.bind(this);
    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
    this.handlePacMonthChange          = this.handlePacMonthChange.bind(this);
    this.handlePrimaryCIAmountChange   = this.handlePrimaryCIAmountChange.bind(this);
    this.handleSecondaryCIAmountChange = this.handleSecondaryCIAmountChange.bind(this);
  }

  handleRateOfReturnChange(rateOfReturn) {
    this.setChartParam('rateOfReturn', rateOfReturn);
  }

  handleInitialInvestmentChange(initialInvestment) {
    this.setChartParam('initialInvestment', initialInvestment);
  }

  handlePacMonthChange(pacMonth) {
    this.setChartParam('pacMonth', pacMonth);
  }

  handlePrimaryCIAmountChange(primaryCIAmount) {
    this.setChartParam('primaryCIAmount', primaryCIAmount);
  }

  handleSecondaryCIAmountChange(secondaryCIAmount) {
    this.setChartParam('secondaryCIAmount', secondaryCIAmount);
  }

  setChartParam(paramName, value) {
    let state = this.state;
    state.chartParams[paramName] = value;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <Chart chartParams={this.state.chartParams} />
        <Controls
          params={this.state.chartParams}

          onRateOfReturnChange={this.handleRateOfReturnChange}
          onInitialInvestmentChange={this.handleInitialInvestmentChange}
          onPacMonthChange={this.handlePacMonthChange}
          onPrimaryCIAmountChange={this.handlePrimaryCIAmountChange}
          onSecondaryCIAmountChange={this.handleSecondaryCIAmountChange}

          />
      </div>
    );
  }
}

export default ParametricChart;
