import React from 'react';
import {Text} from 'react-native';

import Link from '@app/components/Link';

import {CONTACT_SCREEN_INFO} from './consts';
import {Container} from './styles';

const ContactScreen: React.FC = () => {
  return (
    <Container>
      <Text>{CONTACT_SCREEN_INFO}</Text>
      <Link href="/" label="Home" />
    </Container>
  );
};

export default ContactScreen;
