import React, { useMemo } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { history } from 'umi';
import { useLocation } from 'react-router-dom';

export default (props = {}) => {
  const { isShowView, bodyPadding, match, child: Child } = props;
  let location = useLocation();
  const child = useMemo(
    () => <Child match={match} history={history} location={location} />,
    [location.pathname],
  );

  return useMemo(() => {
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
  }, [isShowView]);
};
