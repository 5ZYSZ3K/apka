import React from 'react';
import {Text} from 'react-native';

import LinkButton from '@app/components/LinkButton';

import {
  HOME_SCREEN_CONTACT_LINK_LABEL,
  HOME_SCREEN_INFORMATIONS_LINK_LABEL,
} from './consts';
import {Container} from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <LinkButton href="/contact">
        <Text>{HOME_SCREEN_CONTACT_LINK_LABEL}</Text>
      </LinkButton>
      <LinkButton href="/instructions">
        <Text>{HOME_SCREEN_INFORMATIONS_LINK_LABEL}</Text>
      </LinkButton>
    </Container>
  );
};

export default HomeScreen;
