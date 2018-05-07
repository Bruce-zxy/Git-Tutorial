import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Tree, Icon } from 'antd';

import ActionPartStyleWrapper from './ActionPart.style';

class ActionPart extends Component {
  constructor(props) {
    super(props);
    this.renderTreeNodes = this.renderTreeNodes.bind(this);
    this.tree = [{
      title: 'code',
      key: 'code',
      expanded: true,
      children: [{
        title: 'node_modules',
        key: 'node_modules',
        expanded: false,
        children: [
          { title: 'antd', key: 'antd' },
          { title: 'react', key: 'react' },
          { title: 'redux', key: 'redux' },
        ],
      }, {
        title: 'src',
        key: 'src',
        expanded: true,
        children: [
          { title: 'reducers', key: 'reducers' },
          { title: 'sagas', key: 'sagas' },
          { title: 'ActionPard.js', key: 'ActionPard.js' },
          { title: 'ActionPard.style.js', key: 'ActionPard.style.js' },
          { title: 'App.js', key: 'App.js' },
          { title: 'App.style.js', key: 'App.style.js' },
          { title: 'index.js', key: 'index.js' },
          { title: 'registerServiceWorker.js', key: 'registerServiceWorker.js' },
          { title: 'store.js', key: 'store.js' },
          { title: 'untility.js', key: 'untility.js' },
        ],
      }],
    }];
    this.state = {
      expandedKeys: [],
      tree: this.tree
    }
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
    const { expandedKeys, tree } = this.state;
    return (
      <ActionPartStyleWrapper>
        <Row className="top">
          <Col className="work-area" span={8}>
            <Tree showIcon defaultExpandedKeys={expandedKeys}>
              {this.renderTreeNodes(tree)}
            </Tree>
          </Col>
          <Col className="version-repo" span={16}>
            <Col className="stage" span={12}>
              <Tree showIcon defaultExpandedKeys={expandedKeys}>
                {this.renderTreeNodes(tree)}
              </Tree>
            </Col>
            <Col className="master" span={12}>
              <Tree showIcon defaultExpandedKeys={expandedKeys}>
                {this.renderTreeNodes(tree)}
              </Tree>
            </Col>
          </Col>
        </Row>
        <Row className="bottom">

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
