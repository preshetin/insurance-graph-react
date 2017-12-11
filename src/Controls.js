import React from 'react';
import BulmaInput from './BulmaInput';
import BulmaCheckbox from './BulmaCheckbox';

class Controls extends React.Component {

  constructor(props) {
    super(props);

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

  handleInitialInvestmentChange(e) {
    this.props.onInitialInvestmentChange(e.target.value);
  }

  handlePacMonthChange(e) {
    this.props.onPacMonthChange(e.target.value);
  }

  handlePrimaryCIAmountChange(e) {
    this.props.onPrimaryCIAmountChange(e.target.value);
  }

  handleSecondaryCIAmountChange(e) {
    this.props.onSecondaryCIAmountChange(e.target.value);
  }

  handleCurrentAgeChange(e) {
    this.props.onCurrentAgeChange(e.target.value);
  }

  handleRetirementAgeChange(e) {
    this.props.onRetirementAgeChange(e.target.value);
  }

  handleOurFeesChange(e) {
    this.props.onOurFeesChange(e.target.value);
  }

  handleTheirFeesChange(e) {
    this.props.onTheirFeesChange(e.target.value);
  }

  handleRateOfReturnChange(e) {
    this.props.onRateOfReturnChange(e.target.value);
  }

  handleIncludePrimaryCIInsuranceChange(e) {
    this.props.onIncludePrimaryCIInsuranceChange(e.target.checked);
  }

  handleIncludeSecondaryCIInsuranceChange(e) {
    this.props.onIncludeSecondaryCIInsuranceChange(e.target.checked);
  }

  handlePrimaryIllnessChange(e) {
    this.props.onPrimaryIllnessChange(e.target.checked);
  }

  handleSecondaryIllnessChange(e) {
    this.props.onSecondaryIllnessChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <div className="columns" style={{ border: "1px solid lightgray" }}>
          <div className="column">
            <BulmaInput name="Initial Investment"  value={this.props.params.initialInvestment} handleChange={this.handleInitialInvestmentChange} addon="$" />
            <BulmaInput name="PAC / Month"         value={this.props.params.pacMonth}          handleChange={this.handlePacMonthChange} addon="$" />
            <BulmaInput name="Primary CI Amount"   value={this.props.params.primaryCIAmount}   handleChange={this.handlePrimaryCIAmountChange} addon="$" />
            <BulmaInput name="Secondary CI Amount" value={this.props.params.secondaryCIAmount} handleChange={this.handleSecondaryCIAmountChange} addon="$" />
          </div>
          <div className="column">
            <BulmaInput name="Current Age" value={this.props.params.currentAge} handleChange={this.handleCurrentAgeChange} />
            <BulmaInput name="Retirement Age" value={this.props.params.retirementAge} handleChange={this.handleRetirementAgeChange} />
            <BulmaInput name="Portfolio Fees" value={this.props.params.ourFees} handleChange={this.handleOurFeesChange} addon="%" />
            <BulmaInput name="Mutual Funds Fees" value={this.props.params.theirFees} handleChange={this.handleTheirFeesChange} addon="%" />
            <BulmaInput name="Rate of Return" value={this.props.params.rateOfReturn} handleChange={this.handleRateOfReturnChange} addon="%" />
          </div>
          <div className="column">
            <BulmaCheckbox name="Include Primary CI Insurance"   value={this.props.params.includePrimaryCIInsurance}   handleChange={this.handleIncludePrimaryCIInsuranceChange} />
            <BulmaCheckbox name="Include Secondary CI Insurance" value={this.props.params.includeSecondaryCIInsurance} handleChange={this.handleIncludeSecondaryCIInsuranceChange} />
            <BulmaCheckbox name="Primary Illness" value={this.props.params.primaryIllness} handleChange={this.handlePrimaryIllnessChange} />
            <BulmaCheckbox name="Secondary Illness" value={this.props.params.secondaryIllness} handleChange={this.handleSecondaryIllnessChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Controls
