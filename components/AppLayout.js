import React from 'react';
import {
  Layout, Menu,
} from 'antd';
import Link from 'next/link';

const logoImage = 'images/logo_color.png';
const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => (
  <>
    <Layout
      style={{
        width: 1240,
        margin: '0px auto',
        overflow: 'auto',
        left: 0,
      }}
    >
      <Header
        style={{
          height: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          padding: 0,
        }}
      >
        <div>
          <Link href="/">
            <img
              src={logoImage}
              alt="logo"
              style={{
                width: 200,
                cursor: 'pointer',
              }}
            />
          </Link>
        </div>
        <Menu
          mode="horizontal"
          style={{
            background: 'none',
          }}
        >
          <Menu.Item key="menu"><Link href="/menu">메뉴소개</Link></Menu.Item>
          <Menu.Item key="location"><Link href="/location">매장정보</Link></Menu.Item>
          <Menu.Item key="2"><Link href="/2">이벤트 및 제휴</Link></Menu.Item>
          <Menu.Item key="3"><Link href="/3">창업 안내</Link></Menu.Item>
          <Menu.Item key="4"><Link href="/4">고객의 소리</Link></Menu.Item>
        </Menu>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default AppLayout;
