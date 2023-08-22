import { ProCard } from '@ant-design/pro-components';
import { Col, ConfigProvider, Drawer, Row, Switch, theme as th } from 'antd';

const itemStyle = {
  position: 'relative',
  width: 44,
  height: 36,
  marginRight: 16,
  overflow: 'hidden',
  background: ' #f0f2f5',
  borderRadius: 4,
  boxShadow: '0 1px 2.5px 0 rgba(0,0,0,.18)',
  cursor: 'pointer',
};

const darkOptions = [
  { label: '#fff', value: 'light' },
  { label: '#000', value: 'dark' },
];

const layoutsOptions = [
  { label: 'slider', value: 'slider' },
  { label: 'topleft', value: 'topleft' },
  { label: 'mix', value: 'mix' },
];

export default ({ visible, onClose, config, setConfig, ...props }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: config.dark === 'dark' ? th.darkAlgorithm : th.defaultAlgorithm,
      }}
    >
      <Drawer
        bodyStyle={{ padding: 0 }}
        open={visible}
        width={300}
        onClose={onClose}
        closable={false}
        placement="right"
        style={{
          zIndex: 999,
        }}
        {...props}
      >
        <ProCard split="horizontal">
          <ProCard gutter={8} title="明暗主题/自定义">
            <Row gutter={8}>
              {darkOptions.map((item) => (
                <Col span={8} key={item.value}>
                  <div
                    style={{
                      ...itemStyle,
                      border: config.dark === item.value ? '1px solid #1677ff' : 'none',
                    }}
                    onClick={() => setConfig({ ...config, dark: item.value })}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: item.label,
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </ProCard>
          <ProCard gutter={8} title="自定义导航色">
            <Switch
              checked={config.checked}
              onChange={(value) => setConfig({ ...config, checked: value })}
            />
          </ProCard>
          <ProCard gutter={8} title="导航模式">
            <Row gutter={8}>
              {layoutsOptions.map((item) => (
                <Col span={8} key={item.value}>
                  <div
                    style={{
                      ...itemStyle,
                      border: config.layout === item.value ? '1px solid #1677ff' : 'none',
                    }}
                    onClick={() => setConfig({ ...config, layout: item.value })}
                  >
                    {item.value !== 'topleft' && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '33%',
                          height: '100%',
                          background: item.value === 'slider' ? '#001529' : '#fff',
                        }}
                      />
                    )}
                    <span
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '25%',
                        background: item.value === 'slider' ? '#fff' : '#001529',
                      }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </ProCard>
        </ProCard>
      </Drawer>
    </ConfigProvider>
  );
};
