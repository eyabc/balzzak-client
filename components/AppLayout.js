import React from 'react';
import {Form, Input, Menu, Button, Row, Col, Card, Avatar} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LoginForm from "./LoginForm";
import Link from 'next/link';
import PropTypes from 'prop-types';

const dummy = {
    name: "박종열",
    post: ["1", "2", "3"],
    isLoggedIn: false,
}

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode={"horizontal"}>
                <Menu.Item key={"home"}><Link href={"/"}><a>발짝</a></Link></Menu.Item>
                <Menu.Item key={"menu"}><Link href={"/menu"}><a>메뉴소개</a></Link></Menu.Item>
                <Menu.Item key={"mail"}>
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
            </Menu>
            <Button><Link href={"/user/signup"}><a>회원가입</a></Link></Button>
            <Row>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn ?
                        <Card actions={[
                            <SettingOutlined key="setting"/>,
                            <EditOutlined key="edit"/>,
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}>
                            <Card.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title={dummy.name}
                                description="This is the description"/>
                        </Card>
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
