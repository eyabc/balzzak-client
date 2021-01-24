import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slide from '../components/home/Slide';
import About from '../components/home/About';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'HELLO_SAGA',
    });
  }, []);

  // 성능 최적화를 위하여 잘게 쪼개서 가져오는게 좋다. (리렌더링 최소화)
  // const user = useSelector((state) => state.user.user);
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // const {menu} = useSelector((state) => state.menu);

  return (
    <>
        <Slide />
        <About />
    </>
  );
};

export default Home;
