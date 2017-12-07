import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'
import Controls from './Controls'

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
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Investments & Insurance Graph</h1>
        </header>
        <Chart rateOfReturn={this.state.rateOfReturn} />
        <Controls rateOfReturn={this.state.rateOfReturn} onRateOfReturnChange={this.handleRateOfReturnChange}  />
      </div>
    );
  }
}

export default App;
