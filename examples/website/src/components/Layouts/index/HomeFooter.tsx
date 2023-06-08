import React from 'react'
import styles from './index.module.less';
import { ReactComponent as Waves } from './waves.svg';
import Footer from '@/components/Footer';

export default function HomeFooter() {
  return (
    <React.Fragment>
      <Waves className={styles.waves}></Waves>
      <Footer />
      <div className={styles.normal___Nhkbz}>
        <div className={styles.normal___fStEy}>
          <div className={styles.normal___border} />
          <h2>参与建设</h2>
          <div className={styles.normal___border} />
        </div>
        <div>
          <p className={styles.p_}>
            社区已有非常多小伙伴在和我们一同建设 <strong style={{ color: '#0273dc' }}>antdp</strong>，如果你有兴趣，欢迎{' '}
            <a href='https://github.com/antdpro' style={{ color: '#0273dc' }}>加入我们。</a>
          </p>
          <div>
            <a
              href="https://github.com/antdpro/antdp/graphs/contributors"
              target="_blank"
            >
              <img
                src="https://antdpro.github.io/antdp/CONTRIBUTORS.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
