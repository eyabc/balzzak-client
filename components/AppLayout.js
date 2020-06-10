import React, { useEffect } from 'react';
import {Form, Input, Menu, Button, Row, Col, Card, Avatar} from "antd";
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <div>
            <Menu mode={"horizontal"}>
                <Menu.Item key={"home"}><Link href={"/"}><a>발짝</a></Link></Menu.Item>
                <Menu.Item key={"menu"}><Link href={"/menu"}><a>메뉴소개</a></Link></Menu.Item>
                <Menu.Item key={"location"}><Link href={"/location"}><a>오시는길</a></Link></Menu.Item>
                <Menu.Item key={"mail"}>
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Button><Link href={"/user/signup"}><a>회원가입</a></Link></Button>
            <Row gutter={20}>
                <Col xs={24} md={6}>
                    {isLoggedIn ?
                        <UserProfile/>
                        :
                        <LoginForm/>
                    }
                </Col>
                <Col xs={24} md={12}> {children}</Col>
                <Col xs={24} md={6}></Col>
            </Row>
        </div>
    )
}

AppLayout.prototypes = {
    children: PropTypes.node,
};

export default AppLayout;
