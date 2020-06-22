import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  // 자식 컴포넌트에 프롭스로 전달할때는 항상 useCallback으로 감싼다.
  // 자식컴포넌트에서 새로운 함수를 생성한다고 받아들이기 때문에 렌더링이 실행되기 때문
  const onLogout = useCallback(() => {
    dispatch(logoutRequestAction);
  }, []);

  return (
    <Card actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    >
      <Card.Meta
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        )}
        title={me.nickname}
        description="This is the description"
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
