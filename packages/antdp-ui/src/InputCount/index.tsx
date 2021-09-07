import React, { Fragment, useState, useEffect } from 'react';
import { Input, Button } from 'antd'
import { ButtonProps } from 'antd/lib/button';
import { InputProps } from 'antd/lib/input';


export interface InputCountProps extends InputProps {
  onSend?: () => void;
  buttonProps?: ButtonProps;
  countTime?: number
}

const InputCount = (props: InputCountProps) => {
  const {
    onSend,
    buttonProps,
    countTime,
    ...others
  } = props
  // 默认倒计时时间
  const DEFAULT_TIME = countTime ? countTime : 60
  const [time, setTime] = useState(DEFAULT_TIME)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let timer: any = 0;
    if (loading && time != 0) {
      timer = setInterval(() => {
        // 这时候的time由于闭包的原因，一直是0，所以这里不能用setNum(num-1)
        setTime(n => {
          if (n == 1) {
            setLoading(false)
            clearInterval(timer)
          }
          return n - 1
        });
      }, 1000)
    }
    return () => {
      // 组件销毁时，清除定时器
      clearInterval(timer)
    };
  }, [loading])

  //短信验证
  const send = (e: { preventDefault: () => void; }) => {
    setTime(DEFAULT_TIME);
    setLoading(true)
    // 点击发送按钮,回调调用接口
    onSend && onSend()
    e.preventDefault();
  }
  return (
    <Fragment>
      <div style={{ whiteSpace: 'nowrap', display: 'flex' }}>
        <div>
          <Input
            style={{ width: '100%' }}
            {...others}
          />
        </div>
        <div>
          <Button
            size="middle"
            type="primary"
            loading={loading}
            onClick={send.bind(this)}
            {...buttonProps}
          >
            {loading ? time + '秒' : '发送验证'}
          </Button>
        </div>
      </div>
    </Fragment>
  )
}
export default InputCount

