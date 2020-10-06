import React from 'react';

import streamThumb from '../../../assets/images/stream_screen.png';
import profilePicture from '../../../assets/images/profile_miranha.jpg';

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumb} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar source={profilePicture} />
            <StreamUsername numberOfLines={1}>MatolaLol</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end com ReactNative
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Science & Tecnology</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
