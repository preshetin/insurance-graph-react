import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import ParametricChart from './ParametricChart';

const App = () => {
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
          <ParametricChart />
        </div>
      </div>
    </div>
  );
}

export default App;
