import React from "react";
import styled from "@emotion/styled";
import Link from 'next/link';
//import { Row, Col } from 'antd';

const imgSample = '../images/sample01.png';

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const Instagram = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  h1 {
    margin-top: 78px;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }
  & ul {
    padding: 0;
  }
  & li {
      float: left;
      padding: 5px;
      width: 50%;
      list-style: none;
  }
  & li img {
      width: 100%;
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {  
    & li {
        padding: 5px;
        width: 14.28%;
    }
  }
`;

const SNSTag = () => {
  return (
    <>
    <Instagram>
        <h1>#발짝</h1>
        <ul>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
            <li><a href="/"><img src={imgSample} /></a></li>
        </ul>
    </Instagram>
    </>
  );
};

export default SNSTag;