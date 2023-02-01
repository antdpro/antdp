import { Link } from '@umijs/max';
import React, { useMemo } from 'react';
import { getIcon } from '../utils';

export default (item = {}) => {
  return useMemo(() => {
    if (!item.path) {
      return null;
    }
    return (
      <Link to={item.path}>
        {item.icon ? (
          <span>
            {getIcon(item.icon)}
            <span>{item.name}</span>
          </span>
        ) : (
          item.name
        )}
      </Link>
    );
  }, [item.name, item.path]);
};
