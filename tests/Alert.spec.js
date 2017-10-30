import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-dom/test-utils';
import Alert from '../src';

describe('Alert', () => {
  it('could be rendered', function() {
    TestUtils.renderIntoDocument(
      <Alert className="alert1" message={' 这是一个 message'} type="message" />
    );
    TestUtils.renderIntoDocument(
      <Alert className="alert1" message={' 这是一个 message'} type="message" hasContainer />
    );
    const component  = TestUtils.renderIntoDocument(
      <Alert
        message={' 这是一个 message'}
        type="message"
        description="描述"
        closable
        hasContainer
        closeText=" [不再显示]"
      />
    );
    component.handleClose();
    setTimeout(() => {
      expect(component.state.closed).toBe(true);
      component.toggleShow();
      setTimeout(() => {
        expect(component.state.closed).toBe(false);
      });
    }, 200);
  });
});