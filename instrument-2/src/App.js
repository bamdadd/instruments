import React, { Component } from 'react';
import logo from './logo.svg';
import Matrix from './components/Matrix'
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Matrix/>
      </div>
    );
  }
}

export default connect(s => s)(App);
