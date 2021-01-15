import React from 'react';
import styled from "@emotion/styled";
import { Layout, Row, Col } from 'antd';
import Link from 'next/link';

const logoImage = 'images/balzzak_logo.png';
const { Header, Footer, Content } = Layout;

const StyledHeader = styled(Header)` 
  position: relative;
  z-index: 1;
  padding: 0;
  height: auto;
  border-bottom: 1px solid #fff;
  background: none;
`;
const StyledMenu = styled('ul')`
  display: flex;
  flex-flow: row-reverse;
  margin-bottom: 0;
`;

const MenuItem = styled('li')`
  float: left;
  padding: 0 3%;
  list-style: none;

  & > a {
    color: #fff;
    font-size: 20px;
    background: rgba(255, 255, 255, .2);
  }
`;

const AppLayout = ({ children }) => (
  <>
    <Layout
      style={{
        width: '100%',
      }}
    >
      <StyledHeader>
        <Row
          style={{
            display: 'flex',
            maxWidth: 1140,
            height: 100,
            margin: '0 auto',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Col span={4}>
            <Link href="/">
                <img
                  src={logoImage}
                  alt="logo"
                  style={{
                    width: 81,
                    cursor: 'pointer',
                    paddingBottom: 13,
                  }}
                />
            </Link>
          </Col>
          <Col span={20}>
            <StyledMenu>
                <MenuItem><Link href="/menu">메뉴소개</Link></MenuItem>
                <MenuItem><Link href="/location">매장정보</Link></MenuItem>
                <MenuItem><Link href="/2">이벤트 및 제휴</Link></MenuItem>
                <MenuItem><Link href="/3">창업 안내</Link></MenuItem>
                <MenuItem><Link href="/4">고객의 소리</Link></MenuItem>
                <MenuItem><Link href="/5">커뮤니티</Link></MenuItem>
            </StyledMenu>
          </Col>
        </Row>
      </StyledHeader>
      <Content>
        {children}
      </Content>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default AppLayout;
