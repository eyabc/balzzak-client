import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

// 성능 최적화를 위하여 잘게 쪼개서 가져오는게 좋다. (리렌더링 최소화)

const Home = () => {
    const user  = useSelector(state => state.user.user);
    const isLoggedIn  = useSelector(state => state.user.isLoggedIn);
    const { menu } = useSelector(state => state.menu);

    return (
        <>
            {user ? <div>{user.nickname}</div> : <div>로그아웃</div>}
            {isLoggedIn && <PostForm/>}
            {menu.map(c => {
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
        </>
    )
}

export default Home;
