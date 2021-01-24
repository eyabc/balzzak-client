import React from 'react';
import {
  Layout, Menu,
} from 'antd';
import Link from 'next/link';

const logoImage = 'images/logo_color.png';
const { Header, Footer, Content } = Layout;

const menuItem = {
  color: '#fff',
}

const AppLayout = ({ children }) => (
  <>
    <Layout
      style={{
        width: '100%',
      }}
    >
      <Header
        style={{
          position: 'relative',
          zIndex: '1',
          padding: 0,
          height: 'auto',
          borderBottom: '1px solid #fff',
          background: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            maxWidth: 1140,
            height: 100,
            margin: '0 auto',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <img
              src={logoImage}
              alt="logo"
              style={{
                width: 200,
                cursor: 'pointer',
                filter: 'invert(1)',
              }}
            />
          </Link>
          <Menu
            mode="horizontal"
            style={{
              background: 'none',
              color: '#fff',
            }}
          >
            <Menu.Item key="menu" style={menuItem}><Link href="/menu">메뉴소개</Link></Menu.Item>
            <Menu.Item key="location" style={menuItem}><Link href="/location">매장정보</Link></Menu.Item>
            <Menu.Item key="2" style={menuItem}><Link href="/2">이벤트 및 제휴</Link></Menu.Item>
            <Menu.Item key="3" style={menuItem}><Link href="/3">창업 안내</Link></Menu.Item>
            <Menu.Item key="4" style={menuItem}><Link href="/4">고객의 소리</Link></Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>footer</Footer>
    </Layout>
  </>
);

export default AppLayout;
