import styled from 'styled-components';
import styles from './index.module.less';
import ReactLogo from '../../assets/logo.svg';
import Icon from '@uiw/react-icon';
import { Link, KktproPageProps } from '@kkt/pro';

export default function ({ navigate }: KktproPageProps) {

  const Wrapper = styled.div`
  height: 640px;
  position: relative;
`;

  const BackGround = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: url(https://img.alicdn.com/imgextra/i4/O1CN01Ri0dNS26K5UcRKrrU_!!6000000007642-2-tps-280-1400.png) repeat-x;
    background-position: 0 -40px;
    background-size: 140px 700px;
    height: 640px;
    z-index: 1;
`;

  const Container = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    z-index: 2;
`

  return (
    <Wrapper>
      <BackGround />
      <Container>
        <div className={styles.left}>
          <img src={ReactLogo} width={300} height={300} alt="logo" />
          <div style={{ display: 'flex' }}>
            <div className={styles.button} onClick={()=>navigate('/docs')}>快速上手 →</div>
            <Link
              to="https://github.com/antdpro/antdp"
              target="_blank"
              className={styles.githubStar___uAovz}
            >
              <Icon type="github" style={{ fontSize: 20 }} />
              <span style={{ color: '#4a5e71', fontSize: 18, fontWeight: 500 }}>Antd Project</span>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.b}></div>
          <div className={styles.c}></div>
          <div className={styles.slogan___LKozv}>
            <strong style={{ color: '#0273dc' }}>antdp</strong> 一个基于 <strong style={{ color: '#0273dc' }}>umi</strong> 的初始级别项目
          </div>
          <div className={styles.slogan___LKozv}>
            带给你<strong style={{ color: '#0273dc' }}>简单</strong>而<strong style={{ color: '#0273dc' }}>愉悦</strong>的 Web 开发体验
          </div>
          <div className={styles.bow___H3eNk}></div>
        </div>
      </Container>
    </Wrapper>
  )
}