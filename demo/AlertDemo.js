/**
 * Alert Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let Button = require('uxcore-button');

let Alert = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleShow() {
        this.refs.alert.toggleShow();
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
                <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer={true}/>
                <Alert message={' 这是一个 error'} type="error" hasContainer={true}/>
                <Alert message={' 这是一个 warning'} type="warning" hasContainer={true}/>
                <Alert message={' 这是一个 success'} type="success" hasContainer={true}/>
                <Alert message={' 这是一个 question'} type="question" hasContainer={true}/>
                <Alert message={' 这是一个 stop'} type="stop" hasContainer={true}/>
                <Alert message={' 这是一个 wait'} type="wait" hasContainer={true}/>
                <h1>关闭图标</h1>
                <Alert ref="alert" message={' 这是一个 message'} type="message" closable={true} />
                <Button onClick={this.handleShow.bind(this)}>手动切换是否显示</Button>
                <h1>关闭文字替换图标</h1>
                <Alert message={' 这是一个 message'} type="message" closable={true} closeText="不再显示" />
                <h1>带有描述性文字</h1>
                <Alert message={' 这是一个 message'} description="这里是描述" type="message"/>

            </div>
        );
    }
};

module.exports = Demo;
