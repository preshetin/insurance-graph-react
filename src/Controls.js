import React from 'react'

class Controls extends React.Component {

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

export default Controls
