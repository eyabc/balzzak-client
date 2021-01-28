import React from "react";
import styled from "@emotion/styled";
import { Carousel } from 'antd';
import renderEmpty from "antd/lib/config-provider/renderEmpty";
import { previewImage } from "antd/lib/upload/utils";

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
const Preview = styled.div`
  position: absolute;
  top: 390px;
  right: 0;
  color: #fff;
  font-size: 22px;
  line-height: 1.15;

  & p + p {
    margin-top: 42px;
    padding-top: 42px;
    border-top: 1px solid rgba(255, 255, 255, .5);
  }
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
// `;
// const ButtonPrev = styled.button`
// `;
// const ButtonNext = styled.button`
// `;

function ButtonPrev(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: 1, left: 0, width: '60px', fontSize: '60px', color: '#fff' }}
      onClick={onClick}
    />
  );
}

function ButtonNext(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  zIndex: 1, right: 0, width: '60px', fontSize: '60px', color: '#fff' }}
      onClick={onClick}
    />
  );
}

const Slide = () => {
  const settings = {
    autoplay: true,
    dots: true,
    arrows: true,
    nextArrow: <ButtonNext />,
    prevArrow: <ButtonPrev />
  };
  return (
    <Carousel {...settings} style={{ marginTop: -100 }}>
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
          <Preview>
            <p>편하고 안락한 분위기!</p>
            <p>이야기가 꽃피는 공간!</p>
          </Preview>
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
          <Preview>
            <p>맛은 최고!</p>
            <p>주머니가 가벼워도 OK!</p>
          </Preview>
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
          <Preview>
            <p>작은 고추가 맵다!</p>
            <p>상생하는 발짝!</p>
          </Preview>
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