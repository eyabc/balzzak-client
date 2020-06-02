import React, {useState, useCallback} from 'react';
import AppLayout from '../../components/AppLayout';
import Head from "next/head";
import {Form, Input, Checkbox, Button} from 'antd';

const Signup = () => {
    const useInput = (initialValue = null) => {
        const [value, setter] = useState(initialValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, [])
        return [value, handler];
    }

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [password2, setPassword2] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangePassword2 = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPassword2(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    const onFinish = () => {
        if (password !== password2) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        console.log({
            id, nick, password, password2, term
        })
    };

    return (
        <>
            <Head>
                <title>발짝</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.2.5/antd.compact.css"/>
            </Head>
            <AppLayout>
                <div>
                    <h1>회원가입</h1>
                </div>
            </AppLayout>
            <Form  onFinish={onFinish}>
                <div>
                    <label htmlFor={'user-id'}>아이디</label><br/>
                    <Input name={'user-id'} value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor={"nick"}>닉네임</label>
                    <Input name={'nick'} value={nick} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor={"user-password"}>비밀번호</label>
                    <Input name={'user-password'} type={"password"} value={password} autoComplete={"new-password"} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor={"user-password2"}>비밀번호확인</label>
                    <Input name={'user-password2'} type={"password"} value={password2} autoComplete={"new-password"} required onChange={onChangePassword2}/>
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div> }
                </div>
                <div>
                    <Checkbox name='user-term' onChange={onChangeTerm}/> 동의합니까?
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div> }
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type={'primary'} htmlType={"submit"}>가입하기</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup;
