import React from "react";
const mainSlide01 = '../images/main_slide01.png';

import {
  Carousel,
} from 'antd';

const contentStyle = {
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};

const Slide = () => {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <h3>1</h3>
          <img
            src={mainSlide01}
            alt="slide1"
            style={{
            width: '100%',
            }}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h3>2</h3>
          <img
            src={mainSlide01}
            alt="slide2"
            style={{
            width: '100%',
            }}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h3>3</h3>
          <img
            src={mainSlide01}
            alt="slide3"
            style={{
            width: '100%',
            }}
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <h3>4</h3>
          <img
            src={mainSlide01}
            alt="slide4"
            style={{
            width: '100%',
            }}
          />
        </div>
      </div>
    </Carousel>
  );
};

export default Slide;