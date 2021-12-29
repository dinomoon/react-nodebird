import { Card, Avatar, Button } from 'antd';
import { useCallback } from 'react/cjs/react.development';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="follwers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.meta avatar={<Avatar>DM</Avatar>} title="dinomoon" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
