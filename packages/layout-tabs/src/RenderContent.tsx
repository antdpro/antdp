import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';

interface IframeProps {
  isShowView?: boolean;
  bodyPadding?: number | string;
}

export default (props: IframeProps) => {
  const { isShowView, bodyPadding } = props;
  return useMemo(() => {
    return (
      <div
        style={{
          display: isShowView ? 'block' : 'none',
          padding: bodyPadding || 14,
          height: 'calc(100% - 45px)',
          overflow: 'auto',
          // background:'#f0f2f5'
        }}
      >
        <Outlet />
      </div>
    );
  }, [isShowView]);
};
