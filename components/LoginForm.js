import React, { useCallback } from 'react';
import {
  Form, Input, Button,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInputState';
import { loginRequestAction } from '../reducers/user';

// form은 redux state보다 react state쓰는게 더 편하다.
const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { loggingIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    console.log('Received values of form: ', id, password);
    dispatch(loginRequestAction({ id, password }));
  }, [id, password]);

  return (
    <>
      <Form name="normal_login" onFinish={onFinish} style={{ padding: '10px' }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input id="user-id" name="user-id" value={id} required onChange={onChangeId} prefix={<UserOutlined className="site-form-item-icon" />} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <Input id="user-password" name="user-password" type="password" value={password} required onChange={onChangePassword} prefix={<LockOutlined className="site-form-item-icon" />} />
        </div>
        <div>
          {/* <Checkbox name='user-term' onChange={onChangeTerm}/> 로그인 유지 하시겠습니까? */}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={loggingIn} className="login-form-button">로그인하기</Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
