import React, { Component } from 'react';

export default class RenderContent extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.isShowView !== this.props.isShowView) {
      return true;
    }
    return false;
  }
  render() {
    const { isShowView, bodyPadding, child } = this.props;
    if (!child) return null;
    return (
      <div
        key={index}
        style={{
          display: isShowView ? 'block' : 'none',
          padding: bodyPadding || 14,
        }}
      >
        {child}
      </div>
    );
  }
}
