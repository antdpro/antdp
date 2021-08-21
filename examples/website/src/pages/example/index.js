import { Spin } from 'antd';
import { Fragment, useState } from 'react';
import styles from './index.module.css';

export default function Pages() {
  const [loading, setLoading] = useState(true);
  return (
    <Fragment>
      {loading && (
        <div className={styles.loading}>
          <Spin tip="Loading..." />
        </div>
      )}
      <iframe
        src="https://codesandbox.io/embed/github/antdpro/antdp/tree/master/examples/antdp-base?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          overflow: 'hidden',
        }}
        onLoad={(evn) => {
          setLoading(false);
        }}
        title="@example/antdp-base"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Fragment>
  );
}
