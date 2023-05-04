import styled from 'styled-components';
import styles from './index.module.less';
import { KktproPageProps, Link } from '@kkt/pro';
import { Button } from 'antd'
import Footer from '@/components/Footer';

const Layout = styled.div`
font-family: sans-serif;
background-color: var(--home-background-color);
`;

const Wapper = styled.div`
  position: relative;
  margin-top: -96px;
  max-width: 1392px;
  padding-top: 220px;
  padding-bottom: 100px;
  text-align: center;
  box-sizing: border-box;
  ::before{
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .8;
    pointer-events: none;
    background: no-repeat center / cover;
    background-image: url(https://gw.alipayobjects.com/zos/bmw-prod/a6c3488a-994c-4dd3-8e92-2324d9a1ca48/l9dmd9wl_w2858_h1864.png);
}
`;

export default function ({ navigate }: KktproPageProps) {
  return (
    <Layout>
      <Wapper>
        <h1 className={styles._default_hero_title}>
          <span>antdp</span>
        </h1>
        <p className={styles.des}>
          一个基于 <strong style={{ color: '#0273dc' }}>antd5.x</strong> 和 <strong style={{ color: '#0273dc' }}>umi</strong> 的初始级别项目，集成<strong style={{ color: '#0273dc' }}>路由、dva(Redux)、选项卡</strong>等特性
          <br />
          <small style={{ opacity: 0.7 }}>
            <a href="https://raw.githack.com/antdpro/antdp/v1-doc/index.html" style={{ color: '#1677ff' }}>v1 文档</a>
          </small>
        </p>
        <div className={styles._default_hero_actions}>
          <Button type="primary" shape="round" size="large" onClick={() => navigate('/docs')}>立即上手</Button>
          <div style={{ marginRight: 12 }} />
          <Button type="primary" ghost shape="round" size="large">
            <Link to="https://github.com/antdpro/antdp" target="_blank">GitHub</Link>
          </Button>
        </div>
      </Wapper>
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
    </Layout>
  )
}