import React from 'react';
import BulmaInput from './BulmaInput';

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.handleRateOfReturnChange      = this.handleRateOfReturnChange.bind(this);
    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
    this.handlePacMonthChange          = this.handlePacMonthChange.bind(this);
    this.handlePrimaryCIAmountChange   = this.handlePrimaryCIAmountChange.bind(this);
  }

  handleRateOfReturnChange(e) {
    this.props.onRateOfReturnChange(e.target.value);
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
/*
<label>Rate of Return</label>
<input type="number" value={this.props.rateOfReturn} onChange={this.handleRateOfReturnChange}  placeholder="Rate of Return" />
*/
  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <BulmaInput name="Initial Investment" value={this.props.params.initialInvestment} handleChange={this.handleInitialInvestmentChange} addon="$" />
            <BulmaInput name="PAC / Month"        value={this.props.params.pacMonth}          handleChange={this.handlePacMonthChange} addon="$" />
            <BulmaInput name="Primary CI Amount"  value={this.props.params.primaryCIAmount}   handleChange={this.handlePrimaryCIAmountChange} addon="$" />
          </div>
          <div className="column">
            Second column
          </div>
          <div className="column">
            Third column
          </div>
        </div>
      </div>
    );
  }
}

export default Controls
