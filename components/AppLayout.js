import React from 'react';
import {Input, Menu, Button} from "antd";
import Link from 'next/link';
import PropTypes from 'prop-types';


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
            {children}
        </div>
    )
}

AppLayout.prototypes = {
    children: PropTypes.node,
};

export default AppLayout;
