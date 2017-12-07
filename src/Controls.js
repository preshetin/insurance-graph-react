import React from 'react'

class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.handleRateOfReturnChange = this.handleRateOfReturnChange.bind(this);
    this.handleInitialInvestmentChange = this.handleInitialInvestmentChange.bind(this);
  }

  handleRateOfReturnChange(e) {
    this.props.onRateOfReturnChange(e.target.value);
  }

  handleInitialInvestmentChange(e) {
    this.props.onInitialInvestmentChange(e.target.value);
  }
/*
<label>Rate of Return</label>
<input type="number" value={this.props.rateOfReturn} onChange={this.handleRateOfReturnChange}  placeholder="Rate of Return" />
*/
  render() {
    return (
      <div>

        <label>Initial Investment, $ </label>
        <input type="number" value={this.props.initialInvestment} onChange={this.handleInitialInvestmentChange}  placeholder="Initial Investment" />
      </div>
    );
  }
}

export default Controls
