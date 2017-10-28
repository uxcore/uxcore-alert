/**
 * Alert Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Button = require('uxcore-button');

const Alert = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleShow() {
    this.alert.toggleShow();
  }

  render() {
    return (
      <div>
        <h1>基本使用</h1>
        <Alert className="alert1" message={' 这是一个 message'} type="message" />
        <Alert message={' 这是一个 error'} type="error" />
        <Alert message={' 这是一个 warning'} type="warning" />
        <Alert message={' 这是一个 success'} type="success" />
        <Alert message={' 这是一个 question'} type="question" />
        <Alert message={' 这是一个 stop'} type="stop" />
        <Alert message={' 这是一个 wait'} type="wait" />
        <h1>带有外部容器</h1>
        <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer />
        <Alert
          message={' 这是一个 error这是一个 error这是一个 error这是一个 \
error这是一个 error这是一个 error这是一个 error这是一个 error这是一个 \
error这是一个 error这是一个 error这是一个 error这是一个 error这是一个 \
error这是一个 error'}
          type="error"
          hasContainer
        />
        <Alert message={' 这是一个 warning'} type="warning" hasContainer />
        <Alert message={' 这是一个 success'} type="success" hasContainer />
        <Alert message={' 这是一个 question'} type="question" hasContainer />
        <Alert message={' 这是一个 stop'} type="stop" hasContainer />
        <Alert message={' 这是一个 wait'} type="wait" hasContainer />
        <h1>关闭图标</h1>
        <Alert ref={(c) => { this.alert = c; }} message={' 这是一个 message'} type="message" closable />
        <Button onClick={this.handleShow.bind(this)}>手动切换是否显示</Button>
        <h1>关闭文字替换图标</h1>
        <Alert message={' 这是一个 message'} type="message" closable closeText=" [不再显示]" />
        <h1>带有描述性文字</h1>
        <Alert message={' 这是一个 message'} description="这里是描述" type="message" />
        <h1>全局提示</h1>
        <Alert message={' 这是一个 message'} description="这里是描述" type="message" size="large" closable />
      </div>
    );
  }
}

module.exports = Demo;
