import React, { Component } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { initialContent } from './utils';

export default class IFrameView extends Component {
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
      <Frame
        // onLoad={() => {
        //   console.log('~~::::')
        // }}
        mountTarget="#mount-antdp"
        initialContent={initialContent()}
        className="antdps-global-frame"
        style={{
          display: isShowView ? 'block' : 'none',
          height: 'calc(100% - 35px)',
        }}
      >
        <FrameContextConsumer>
          {({ document, window }) => {
            return <div style={{ padding: bodyPadding || 14 }}>{child}</div>;
          }}
        </FrameContextConsumer>
      </Frame>
    );
  }
}
