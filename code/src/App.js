import React, { Component } from 'react';
import { connect } from 'react-redux';
import Terminal from 'terminal-in-react';

import { dateFormat } from './utility';

// import AppStyleWrapper from './App.style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: `This is Git Tutorial offered by Bruce-zxy. Now is `
    };
    this.commands = {
      showmsg: {
        commands: () => 'Hello World',
        descriptions: 'shows a message'
      },
      popup: {
        commands: () => alert('Terminal in React'),
        descriptions: 'alert'
      }
    };
  }
  componentDidMount() {
    const { msg } = this.state;
    const updateTime = () => {
      const preMsg = document.querySelectorAll('.terminal-base pre')[0];
      !!preMsg ? preMsg.innerHTML = `${msg}<span>${dateFormat('yyyy-MM-dd hh:mm:ss')}</span>\n` : console.warn('Not Found The Tips Bar.')
      requestAnimationFrame(updateTime);
    }
    updateTime();
  }
  createCommands = () => {
    let cmds = this.commands;
    let commands = {};
    let descriptions = {};
    for (let ele in cmds) {
      if (cmds.hasOwnProperty(ele)) {
        commands[ele] = cmds[ele]['commands'];
        descriptions[ele] = cmds[ele]['descriptions'];
      }
    }
    return { commands, descriptions };
  }
  render() {
    const { msg } = this.state;
    const mainProps = this.createCommands();
    return (
      <div className="container">
        <Terminal
          color='white'
          backgroundColor='black'
          barColor='#333'
          startState="maximised"
          allowTabs={false}
          hideTopBar={true}
          watchConsoleLogging={false}
          msg={msg}
          {...mainProps}
        />
        <div className="display">
          <p>这是需要演示的地方</p>
        </div>
      </div>
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
