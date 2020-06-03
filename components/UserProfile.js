import React from "react";
import {Avatar, Card, Col} from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const dummy = {
    name: "박종열",
    post: ["1", "2", "3"],
    isLoggedIn: false,
}

const UserProfile = () => {
    return (
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
    )
}

export default UserProfile;
