import React from 'react';

export interface AuthorizedProps {
  /**
   * 标题
   */
  title?: boolean;
  children?: React.ReactNode;
}

declare const _default: (props?: AuthorizedProps) => React.ReactNode;
export default _default;
