import React from "react";
import styled from "@emotion/styled";
import { Carousel } from 'antd';

const mainSlide01 = '../images/main_slide01.png';

const MainSlide = styled.div`
  position: relative;
`;
const SlideText = styled.div`
  position: relative;
  z-index: 2;
  width: 1140px;
  margin: 0 auto;
`;
const SlideTopTitle = styled.h3`
  position: absolute;
  top: 263px;
  left: 0;
  color: #fff;
  font-size: 40px;
  line-height: 1.15;
  font-weight: 100;
`;
const SlideContent = styled.p`
  position: absolute;
  top: 291px;
  right: 0;
  color: #fff;
  font-size: 18px;
  line-height: 1.15;
  font-weight: 100;
`;
const MainImg = styled.img`
  width: 100%;
`;
const SlideDim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
`;

const Slide = () => {
  return (
    <Carousel autoplay style={{ marginTop: -100 }}>
      <MainSlide>
        <SlideText>
          <SlideTopTitle>
              {'프렌차이즈에는'}
              <br/>
              {'없는특별한 감성!'}
          </SlideTopTitle>
          <SlideContent>
              {'발짝은 한번 머물고 가는 곳이 아닌, 사람들과 추억을 만들고, 그 추억이 이야기가 되는 공간입니다.'}
              <br/>
              {'찾아와 주시는 모든 분들이 편하고 안락하게 즐길 수 있도록 정성껏 대접하는 포차가 되겠습니다.'}
          </SlideContent>
        </SlideText>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
        <SlideDim/>
      </MainSlide>

      <MainSlide>
        <SlideText>
          <SlideTopTitle>
              {'가성비 갑!'}
              <br/>
              {'저렴한 안주!'}
          </SlideTopTitle>
          <SlideContent>
              {'222222222222'}
              <br/>
              {'222222222222222'}
          </SlideContent>
        </SlideText>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
        <SlideDim/>
      </MainSlide>
      
      <MainSlide>
        <SlideText>
          <SlideTopTitle>
              {'전수창업문의'}
              <br/>
              {'상생하는 발짝!'}
          </SlideTopTitle>
          <SlideContent>
              {'3333333333333'}
              <br/>
              {'3333333333333'}
          </SlideContent>
        </SlideText>
        <MainImg
          src={mainSlide01}
          alt="slide1"
        />
        <SlideDim/>
      </MainSlide>
    </Carousel>
  );
};

export default Slide;