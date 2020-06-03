import React from 'react';
import { Form, Input,  Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useInput from "../hooks/useInputState";

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onFinish = values => {
        console.log('Received values of form: ', id, password);
    };

    return (
        <>
            <Form name="normal_login" onFinish={onFinish} style={{padding: '10px'}}>
                <div>
                    <label htmlFor={'user-id'}>아이디</label><br/>
                    <Input name={'user-id'} value={id} required onChange={onChangeId} prefix={<UserOutlined className="site-form-item-icon"/>}/>
                </div>
                <div>
                    <label htmlFor={"user-password"}>비밀번호</label>
                    <Input name={'user-password'} type={"password"} value={password} required onChange={onChangePassword} prefix={<LockOutlined className="site-form-item-icon"/>}/>
                </div>
                <div>
                    {/*<Checkbox name='user-term' onChange={onChangeTerm}/> 로그인 유지 하시겠습니까?*/}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type={'primary'} htmlType={"submit"} className="login-form-button">로그인하기</Button>
                </div>
            </Form>
        </>
    )
}

export default LoginForm;
