import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const LocationTap = () => {
  const [key, setKey] = useState('');

  const handleClick = (e) => {
    console.log('click ', e);
    setKey(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[key]} mode="horizontal">
      <Menu.Item key="searchLoc" icon={<MailOutlined />}>
        지역검색
      </Menu.Item>
      <Menu.Item key="storeInfo" icon={<MailOutlined />}>
        매장정보
      </Menu.Item>
    </Menu>
  );
};

export default LocationTap;
