/**
 * Alert Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

class Alert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            closed: false
        }
    }

    toggleShow() {
        this.setState({
            closed: !this.state.closed
        })
    }

    handleClose(e) {

        this.setState({
          closed: true
        });
        this.props.onClose.call(this, e);
        
    }

    renderContent() {
        let me = this;
        let iconMap = {
            message: 'information',
            error: 'error',
            warning: 'caution',
            success: 'success',
            question: 'query',
            stop: 'prohibition',
            wait: 'wait'
        }
        let {
            prefixCls,
            iconPrefixCls,
            type,
            closable,
            description,
            hasContainer,
            className
        } = me.props;
        let iconType = type;
        if (iconPrefixCls == 'kuma-icon') {
            iconType = iconMap[iconType];
        }
        // 保证 className 加在最外层容器上
        return <p className={classnames({
            [`${prefixCls} ${prefixCls}-${type}`]: true,
            [className]: !!className && !closable && !description && !hasContainer
        })}>
                    <i className={`${prefixCls}-icon ${iconPrefixCls} ${iconPrefixCls}-${iconType}`}></i>
                    <span>{me.props.message}</span>
                </p>
    }

    renderDes() {
        let me = this;
        let {
            description,
            prefixCls
        } = me.props;
        if (!!description) {
            return <p className={`${prefixCls} ${prefixCls}-follow`}>{description}</p>
        }
    }

    renderClose() {
        let me = this;
        let {
            prefixCls,
            iconPrefixCls
        } = me.props;
        if (me.props.closable) {
            if (me.props.closeText) {
                return <span className={`${prefixCls}-close`} onClick={me.handleClose.bind(me)}>{me.props.closeText}</span>
            }
            else {
                return <i className={`${prefixCls}-close ${iconPrefixCls} ${iconPrefixCls}-close`} onClick={me.handleClose.bind(me)}></i>
            }
        }
    }

    render() {
        let me = this;
        let {
            prefixCls,
            type,
            closable,
            hasContainer,
            description,
            className
        } = me.props;
        let html;
        let content = me.renderContent();
        if (hasContainer || closable || !!description) {
            html = <div className={classnames({
                [`${prefixCls}-container ${prefixCls}-container-${type}`]: true,
                [`${prefixCls}-container-closable`]: closable,
                [className]: !!className
            })}>
                        {content}
                        {me.renderDes()}
                        {me.renderClose()}
                   </div>
        }
        else {
            html = content;
        }
        return this.state.closed ? null : html;
    }
}

Alert.defaultProps = {
    prefixCls: 'kuma-alert',
    iconPrefixCls: 'kuma-icon',
    type: 'message',
    onClose: () => {},
    hasContainer: false
}


// http://facebook.github.io/react/docs/reusable-components.html
Alert.propTypes = {
    prefixCls: React.PropTypes.string,
    iconPrefixCls: React.PropTypes.string,
    type: React.PropTypes.oneOf(['message', 'error', 'warning', 'success', 'question', 'stop', 'wait']),
    closable: React.PropTypes.bool,
    hasContainer: React.PropTypes.bool,
    closeText: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    message: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    description: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    onClose: React.PropTypes.func

}

Alert.displayName = "Alert";

module.exports = Alert;