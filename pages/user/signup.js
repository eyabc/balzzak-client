import React, {useState} from 'react';
import AppLayout from '../../components/AppLayout';
import Head from "next/head";
import {Form, Input, Checkbox, Button} from 'antd';

const Signup = () => {
    const useInput = (initialValue = null) => {
        const [value, setter] = useState(initialValue);
        const handler = e => {
            setter(e.target.value);
        }
        return [value, handler];
    }

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [password2, setPassword2] = useState(false);

    const onChangePassword2 = (e) => {
        setPasswordError(e.target.value !== password);
        setPassword2();
    };

    const onChangeTerm = (e) => {
        setTerm(e.target.checked);
    };

    const onSubmit = (e) => {
        e.preventDefault();
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
            <Form onSubmit={onSubmit}>
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
                    <Input name={'user-password'} type={"password"} value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor={"user-password2"}>비밀번호확인</label>
                    <Input name={'user-password2'} type={"password"} value={password2} required onChange={onChangePassword2}/>
                </div>
                <div>
                    <Checkbox name='user-term' onChange={onChangeTerm}/> 동의합니까?
                </div>
                <div>
                    <Button htmlType={"submit"} type={'primary'}>확인</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup;
