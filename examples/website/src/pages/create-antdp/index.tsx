import { Fragment, useState } from 'react';
import { Spin } from 'antd';
import styles from '../example/index.module.css';

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
        src="https://antdpro.github.io/create-antdp"
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          overflow: 'hidden',
        }}
        onLoad={(evn) => {
          setLoading(false);
        }}
        onError={(evn) => {
          setLoading(false);
        }}
        title="@example/antdp-base"
      />
    </Fragment>
  );
}
