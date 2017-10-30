/**
 * Alert Component for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import classnames from 'classnames';
import Icon from 'uxcore-icon';
import PropTypes from 'prop-types';

class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closed: false,
    };
  }

  toggleShow() {
    this.setState({
      closed: !this.state.closed,
    });
  }

  handleClose(e) {
    this.setState({
      closed: true,
    });
    this.props.onClose.call(this, e);
  }

  renderContent() {
    const me = this;
    const iconMap = {
      message: 'uxcore-icon uxicon-tishi-full',
      error: 'uxcore-icon uxicon-biaodanlei-tongyongqingchu',
      warning: 'uxcore-icon uxicon-jinggao-full',
      success: 'uxcore-icon uxicon-chenggong-full',
      question: 'uxcore-icon uxicon-yiwen-full',
      stop: 'kuma-icon kuma-icon-prohibition',
      wait: 'kuma-icon kuma-icon-wait',
    };
    const {
      prefixCls,
      iconPrefixCls,
      type,
      closable,
      description,
      hasContainer,
      className,
    } = me.props;
    const iconClassName = iconMap[type];
    // 保证 className 加在最外层容器上
    return (
      <p
        className={classnames({
          [`${prefixCls} ${prefixCls}-${type}`]: true,
          [className]: !!className && !closable && !description && !hasContainer,
        })}
      >
        <i
          className={classnames(`${prefixCls}-icon ${iconClassName}`, {
            [`${iconPrefixCls} ${iconPrefixCls}-${type}`]: ['kuma-icon',
              'uxcore-icon'].indexOf(iconPrefixCls) === -1,
          })}
        />
        <span>{me.props.message}</span>
      </p>
    );
  }

  renderDes() {
    const me = this;
    const {
      description,
      prefixCls,
    } = me.props;
    if (description) {
      return <p className={`${prefixCls} ${prefixCls}-follow`}>{description}</p>;
    }
    return null;
  }

  renderClose() {
    const me = this;
    const {
      prefixCls,
    } = me.props;
    if (me.props.closable) {
      if (me.props.closeText) {
        return (<span
          className={`${prefixCls}-close`}
          onClick={me.handleClose.bind(me)}
        >
          {me.props.closeText}
        </span>);
      }
      return (<Icon
        name="biaoqian-qingchu"
        className={`${prefixCls}-close`}
        onClick={(e) => { this.handleClose(e); }}
      />);
    }
    return null;
  }

  render() {
    const me = this;
    const {
      prefixCls,
      type,
      closable,
      hasContainer,
      description,
      className,
      size,
    } = me.props;
    let html;
    const content = me.renderContent();
    if (hasContainer || closable || !!description) {
      html = (
        <div
          className={classnames({
            [`${prefixCls}-container ${prefixCls}-container-${type}`]: true,
            [`${prefixCls}-container-closable`]: closable,
            [className]: !!className,
            [`${prefixCls}-size-large`]: size === 'large',
          })}
        >
          {content}
          {me.renderDes()}
          {me.renderClose()}
        </div>);
    } else {
      html = content;
    }
    return this.state.closed ? null : html;
  }
}

Alert.defaultProps = {
  prefixCls: 'kuma-alert',
  iconPrefixCls: 'kuma-icon',
  type: 'message',
  onClose: () => { },
  hasContainer: false,
  size: 'normal',
};


// http://facebook.github.io/react/docs/reusable-components.html
Alert.propTypes = {
  prefixCls: PropTypes.string,
  iconPrefixCls: PropTypes.string,
  type: PropTypes.oneOf(['message', 'error', 'warning', 'success',
    'question', 'stop', 'wait']),
  closable: PropTypes.bool,
  hasContainer: PropTypes.bool,
  closeText: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  message: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  onClose: PropTypes.func,
  size: PropTypes.oneOf(['normal', 'large']),

};

Alert.displayName = 'Alert';

export default Alert;
