import React from 'react';
import ReactDOM from 'react-dom';
import GitHubCorners from '@uiw/react-github-corners';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <GitHubCorners fixed href="https://github.com/kktjs/kkt" size={60} target="__blank" />
    <iframe
      src="https://codesandbox.io/embed/github/antdpro/antdp/tree/master/examples/antdp-base?fontsize=14&hidenavigation=1&theme=dark&view=preview"
      style={{
      width: '100%',
      height: '100%',
      border: 0,
      overflow: 'hidden'
      }}
      title="@example/antdp-base"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

