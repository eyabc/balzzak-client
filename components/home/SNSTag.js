import React from "react";
import styled from "@emotion/styled";
import Link from 'next/link';
//import { Row, Col } from 'antd';

const imgSample = '../images/sample01.png';

const Instagram = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  h1 {
    margin-top: 78px;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }
  & li {
      float: left;
      padding: 5px;
      width: 14.28%;
      list-style: none;
  }
  & li img {
      width: 100%;
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