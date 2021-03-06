import React, { useMemo } from 'react';
import { history } from 'umi';
import { useLocation } from 'react-router-dom';

export default (props = {}) => {
  const { isShowView, bodyPadding, match = {}, child: Child } = props;
  let location = useLocation();
  return useMemo(() => {
    return (
      <div
        style={{
          display: isShowView ? 'block' : 'none',
          padding: bodyPadding || 14,
          height: 'calc(100% - 45px)',
          overflow: 'auto',
        }}
      >
        <Child match={match} history={history} location={location} />
      </div>
    );
  }, [isShowView]);
};
