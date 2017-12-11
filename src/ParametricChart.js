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
        includePrimaryCIInsurance: true,
        includeSecondaryCIInsurance: true,
        currentAge: 30,
        retirementAge: 65,
        rateOfReturn: 5,
        ourFees: 0.5,
        theirFees: 2.3,
        primaryIllness: true,
        secondaryIllness: true,
        // illnessEventDate: 47 // remove: calculate from others
      }
    }

    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
    this.handlePacMonthChange          = this.handlePacMonthChange.bind(this);
    this.handlePrimaryCIAmountChange   = this.handlePrimaryCIAmountChange.bind(this);
    this.handleSecondaryCIAmountChange = this.handleSecondaryCIAmountChange.bind(this);
    this.handleCurrentAgeChange = this.handleCurrentAgeChange.bind(this);
    this.handleRetirementAgeChange = this.handleRetirementAgeChange.bind(this);
    this.handleOurFeesChange = this.handleOurFeesChange.bind(this);
    this.handleTheirFeesChange = this.handleTheirFeesChange.bind(this);
    this.handleRateOfReturnChange      = this.handleRateOfReturnChange.bind(this);
    this.handleIncludePrimaryCIInsuranceChange      = this.handleIncludePrimaryCIInsuranceChange.bind(this);
    this.handleIncludeSecondaryCIInsuranceChange      = this.handleIncludeSecondaryCIInsuranceChange.bind(this);
    this.handlePrimaryIllnessChange      = this.handlePrimaryIllnessChange.bind(this);
    this.handleSecondaryIllnessChange      = this.handleSecondaryIllnessChange.bind(this);
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

  handleCurrentAgeChange(currentAge) {
    this.setChartParam('currentAge', currentAge);
  }

  handleRetirementAgeChange(retirementAge) {
    this.setChartParam('retirementAge', retirementAge);
  }

  handleOurFeesChange(ourFees) {
    this.setChartParam('ourFees', ourFees);
  }

  handleTheirFeesChange(theirFees) {
    this.setChartParam('theirFees', theirFees);
  }

  handleRateOfReturnChange(rateOfReturn) {
    this.setChartParam('rateOfReturn', rateOfReturn);
  }

  handleIncludePrimaryCIInsuranceChange(includePrimaryCIInsurance) {
    this.setChartParam('includePrimaryCIInsurance', includePrimaryCIInsurance);
  }

  handleIncludeSecondaryCIInsuranceChange(includeSecondaryCIInsurance) {
    this.setChartParam('includeSecondaryCIInsurance', includeSecondaryCIInsurance);
  }

  handlePrimaryIllnessChange(primaryIllness) {
    this.setChartParam('primaryIllness', primaryIllness);
  }

  handleSecondaryIllnessChange(secondaryIllness) {
    this.setChartParam('secondaryIllness', secondaryIllness);
  }

  setChartParam(paramName, value) {
    let state = this.state;
    state.chartParams[paramName] = value;
    this.setState(state);
  }

  render() {
    return (

      <main role="main" class="container">

      <div >
      <Chart chartParams={this.state.chartParams} />
      <Controls
        params={this.state.chartParams}

        onInitialInvestmentChange={this.handleInitialInvestmentChange}
        onPacMonthChange={this.handlePacMonthChange}
        onPrimaryCIAmountChange={this.handlePrimaryCIAmountChange}
        onSecondaryCIAmountChange={this.handleSecondaryCIAmountChange}
        onCurrentAgeChange={this.handleCurrentAgeChange}
        onRetirementAgeChange={this.handleRetirementAgeChange}
        onOurFeesChange={this.handleOurFeesChange}
        onTheirFeesChange={this.handleTheirFeesChange}
        onRateOfReturnChange={this.handleRateOfReturnChange}
        onIncludePrimaryCIInsuranceChange={this.handleIncludePrimaryCIInsuranceChange}
        onIncludeSecondaryCIInsuranceChange={this.handleIncludeSecondaryCIInsuranceChange}
        onPrimaryIllnessChange={this.handlePrimaryIllnessChange}
        onSecondaryIllnessChange={this.handleSecondaryIllnessChange}

        />
      </div>

      </main>
    );
  }
}

export default ParametricChart;
