import React from 'react';
import { Card } from 'antd';

export default function ({ title = '', description = '' }) {
  return (
    <Card style={{ borderRadius: 0 }}>
      <h3>{title}</h3>
      <span style={{ color: '#888', fontSize: 12 }}>{description}</span>
    </Card>
  );
}
