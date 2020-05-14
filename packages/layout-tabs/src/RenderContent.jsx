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
        style={{
          display: isShowView ? 'block' : 'none',
          padding: bodyPadding || 14,
          height: 'calc(100% - 35px)',
          overflow: 'auto',
        }}
      >
        {child}
      </div>
    );
  }
}
