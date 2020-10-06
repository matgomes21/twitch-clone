import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../styles/colors';
import profilePicture from '../../../assets/images/profile_miranha.jpg';

import {
  Container,
  Avatar,
  AvatarImage,
  OnlineStatus,
  RightSide,
  Button,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <AvatarImage source={profilePicture} />
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
