import React from 'react';
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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
            {dummy.isLoggedIn && <PostForm/>}
            {dummy.mainPosts.map(c => {
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
        </>
    )
}

export default Home;
