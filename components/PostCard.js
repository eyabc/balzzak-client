import React from 'react';
import { Form, Input, Button, Avatar, Card } from "antd";
import PropTypes from 'prop-types';
import { RetweetOutlined, LikeOutlined } from '@ant-design/icons';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        user: {
            nickname: "jongyeol",
        },
        content: "안녕하세요",
        img: "https://www.woowahan.com/img/pc/main-fonts-img.png",
    }],
}

const PostCard = ({ post }) => {
    return (
        <Card
            cover={post.img && <img alt={"example"} src={post.img}/>}
            actions={[
                <RetweetOutlined/>,
                <LikeOutlined/>,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta avatar={<Avatar>{post.user.nickname}</Avatar>}
                       title={post.user.nickname}
                       description={post.content}
            >
            </Card.Meta>
        </Card>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        user: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object,
    })
}
export default PostCard;
