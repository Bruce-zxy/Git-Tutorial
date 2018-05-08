import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import { dateFormat } from './utility';

import ActionPart from './ActionPart';
import AppStyleWrapper from './App.style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: `This is Git Tutorial offered by Bruce-zxy. Now is `,
      action: {}
    };
    this.commands = {
      git: {
        commands: this.gitCommands.bind(this),
        descriptions: 'Git Tutorial'
      },
      touch: {
        commands: this.touchCommands.bind(this),
        descriptions: 'Create New File'
      },
      remove: {
        commands: this.removeCommands.bind(this),
        descriptions: 'Remove New File'
      },
      rm: {
        commands: (args, print, runCmd) => runCmd(`remove ${args.slice(1)}`),
        descriptions: 'Remove New File'
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
  gitCommands(args, print, runCmd) {



  }
  touchCommands(args, print, runCmd) {
    switch(args.length) {
      case 2:
        this.setState({
          action: { action: 'addFile', data: { title: args[1], key: args[1] } }
        });
        print(`Create New File Named ${args[1]}`);
        break;
      default:
        print('Need arguments!\neg: touch new.txt');
    }
  }
  removeCommands(args, print, runCmd) {
    switch(args.length) {
      case 2:
        this.setState({
          action: { action: 'removeFile', data: args[1] }
        });
        print(`Remove File Named ${args[1]}`);
        break;
      default:
        print('Need arguments!\neg: remove new.txt');
    }
  }
  createCommandList = () => {
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
    const { msg, action } = this.state;
    const commandList = this.createCommandList();
    return (
      <AppStyleWrapper>
        <Terminal
          color='white'
          backgroundColor='black'
          barColor='#333'
          startState="maximised"
          allowTabs={false}
          hideTopBar={true}
          watchConsoleLogging={false}
          msg={msg}
          {...commandList}
        />
        <ActionPart action={action}/>
      </AppStyleWrapper>
    );
  }
}

export default App;
