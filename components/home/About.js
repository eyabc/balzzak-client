import React from "react";
import styled from "@emotion/styled";
import Link from 'next/link';
import { Row, Col } from 'antd';

const imgMenu = '../images/img_menu.png';
const imgMap = '../images/img_map.png';
const imgPartner = '../images/img_partner.png';

const AboutUs = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;
const BreifInfo = styled.div`
  margin-top: 82px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const TitleRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 14px;
  color: #fff;
`;
const TitleLeft = styled.div`
  font-size: 14px;
`;

const About = () => {
  return (
    <>
    <AboutUs>
      <BreifInfo>
        발은 닭발의 ‘발’ 이며 짝은 짝태의 ‘짝’ 을 재미있게 표현한 닭발과 짝태 전문점입니다.<br/>
        발짝은 한번 머물고 가는 곳이 아닌, 사람들과 추억을 만들고, 그 추억이 이야기가 되는 공간입니다. <br/>
        찾아와 주시는 모든 분들이 편하고 안락하게 즐길 수 있도록 정성껏 대접하는 포차가 되겠습니다.
      </BreifInfo>
      <Row>
        <Col span={10}>
          <Link href="/menu"><img src={imgMenu} style={{width: "100%"}}/></Link>
          <TitleRight>추천메뉴</TitleRight>
        </Col>
        <Col span={14} style={{paddingLeft: "3%"}}>
          <Row>
            <Col span={10}>
              <Link href="/location"><img src={imgMap} style={{width: "100%"}}/></Link>
            </Col>
            <Col span={14}>
              <TitleLeft>매장찾기</TitleLeft>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <Link href="/3"><img src={imgPartner} style={{width: "100%"}}/></Link>
            </Col>
            <Col span={14}>
              <TitleLeft>전수창업문의</TitleLeft>
            </Col>
          </Row>
        </Col>
      </Row>
    </AboutUs>
    </>
  );
};

export default About;