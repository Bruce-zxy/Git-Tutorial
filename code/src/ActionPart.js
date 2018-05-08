import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Tree, Icon, Divider } from 'antd';

import ActionPartStyleWrapper from './ActionPart.style';

class ActionPart extends Component {
  constructor(props) {
    super(props);
    this.renderTreeNodes = this.renderTreeNodes.bind(this);
    this.tree = [{
      title: 'GitTutorial',
      key: 'GitTutorial',
      expanded: true,
      children: [{
        title: 'node_modules',
        key: 'node_modules',
        expanded: false,
        children: [
          { title: 'antd', key: 'antd' },
          { title: 'react', key: 'react' }
        ]
      }, {
        title: 'src',
        key: 'src',
        expanded: true,
        children: [
          { title: 'a.js', key: 'a.js' },
          { title: 'b.python', key: 'b.python' }
        ]
      }]
    }];
    this.deepClone = (obj) => {
      var newObj = obj.constructor === Array ? [] : {};
      if (typeof obj !== 'object') {
        console.log(obj);
        return;
      } else {
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            newObj[i] = typeof obj[i] === 'object' ? this.deepClone(obj[i]) : obj[i];
          }
        }
      }
      return newObj
    }
    this.state = {
      expandedKeys: [],
      sourceTree: this.deepClone(this.tree),
      stageTree: this.deepClone(this.tree),
      masterTree: this.deepClone(this.tree),
      remoteTree: this.deepClone(this.tree),
      treeId: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    const { newDom } = nextProps;
    console.log(newDom);
    this.setState((prevState) => {
      prevState.sourceTree[0].children[1].children.push(newDom)
    })
  }
  componentWillMount() {
    this.findExpandedKeys(this.tree);
  }
  findExpandedKeys(data) {
    const self = this;
    data.forEach((item) => {
      if (item.children) {
        if (item.expanded) self.setState((prevState) => ({ expandedKeys: [...prevState.expandedKeys, item.key] }));
        self.findExpandedKeys(item.children);
      }
    })
  }
  renderTreeNodes(data) {
    return data.map((item) => {
      if (item.children) {

        return (
          <Tree.TreeNode icon={<Icon type={item.expanded ? "folder-open" : "folder"} />} title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </Tree.TreeNode>
        );
      }
      return <Tree.TreeNode icon={<Icon type={/\./.test(item.key) ? "copy" : "folder"} />} {...item} />;
    });
  }
  render() {
    const { expandedKeys, sourceTree, stageTree, masterTree, remoteTree, treeId } = this.state;
    return (
      <ActionPartStyleWrapper key={treeId}>
        <Row className="top" gutter={32} type="flex" justify="space-around">
          <Col className="work-area" span={8}>
            <Row gutter={16}>
              <Divider>工作区</Divider>
              <Col className="work-area" span={24}>
                <Divider orientation="left">源代码</Divider>
                <Tree showIcon defaultExpandedKeys={expandedKeys}>
                  {this.renderTreeNodes(sourceTree)}
                </Tree>
              </Col>
            </Row>
          </Col>
          <Col className="version-repo" span={16}>
            <Row gutter={16}>
              <Divider>版本库</Divider>
              <Col className="stage" span={12}>
                <Divider orientation="left">暂存区 Stage</Divider>
                <Tree showIcon defaultExpandedKeys={expandedKeys}>
                  {this.renderTreeNodes(stageTree)}
                </Tree>
              </Col>
              <Col className="master" span={12}>
                <Divider orientation="left">分支 Master</Divider>
                <Tree showIcon defaultExpandedKeys={expandedKeys}>
                  {this.renderTreeNodes(masterTree)}
                </Tree>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bottom" type="flex" justify="space-around">
          <Col className="remote-repo" span={16}>
            <Row gutter={16}>
              <Divider orientation="left">远程库 Remote</Divider>
              <Tree showIcon defaultExpandedKeys={expandedKeys}>
                {this.renderTreeNodes(remoteTree)}
              </Tree>
            </Row>
          </Col>
        </Row>
      </ActionPartStyleWrapper>
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
)(ActionPart);
