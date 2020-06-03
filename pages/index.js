import React from 'react';
import { Form, Input, Button, Avatar, Card } from "antd";
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

const Home = () => {
    return (
        <>
            {dummy.isLoggedIn && <Form style={{marginBottom: "20px"}} encType={"multipart/form-data"}>
                <Input.TextArea maxLength={140} placeholder={"어떤 신기한 일이 있었나요"}/>
                <div>
                    <input type={'file'} multiple hidden/>
                    <Button>이미지 업로드</Button>
                    <Button type={'primary'} style={{float: 'right'}} htmlType={"submit"}>글쓰기</Button>
                </div>
                <div>
                    {dummy.imagePaths.map((v, i) => {
                        return (
                            <div key={v} style={{display: 'inline-block'}}>
                                <img src={"http://localhost:3000/" + v} style={{width: '200px'}} alt={v}/>
                                <Button>제거</Button>
                            </div>
                        )
                    })}
                </div>
            </Form>}
            {dummy.mainPosts.map(c => {
                return (
                    <Card key={+c.createdAt}
                          cover={c.img && <img alt={"example"} src={c.img}/>}
                          actions={[
                              <RetweetOutlined />,
                              <LikeOutlined />,
                          ]}
                          extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta avatar={<Avatar>{c.user.nickname}</Avatar>}
                                   title={c.user.nickname}
                                   description={c.content}
                        >
                        </Card.Meta>
                    </Card>
                )
            })}
        </>
    )
}

export default Home;
