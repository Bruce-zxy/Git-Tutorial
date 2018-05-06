import React, { Component } from 'react';
import { connect } from 'react-redux';
import Terminal from 'terminal-in-react';

import AppStyleWrapper from './App.style.js';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <AppStyleWrapper>
        <header className="App-header">
          <img className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppStyleWrapper>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    count: state.app.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
