import React, { Fragment } from 'react';

export function getIconComponent(name) {
  let comp = null;
  try {
    comp = require(`@ant-design/icons/${toCamel(name)}Filled`);
  } catch (_) {
    try {
      comp = require(`@ant-design/icons/${toCamel(name)}Outlined`);
    } catch (error) {}
  }
  return comp.default || null;
}

export const toCamel = str => {
  let s = str && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};

export default (props = {}) => {
  if (!props.type) {
    return <Fragment />;
  }
  const Icons = getIconComponent(props.type);
  if (Icons) {
    return <Icons />;
  }
  return <Fragment />;
}