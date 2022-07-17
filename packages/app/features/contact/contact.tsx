import React from 'react';
import {Text} from 'react-native';

import Link from 'app/components/Link';

import {Container} from './styles';

const ContactScreen: React.FC = () => {
  return (
    <Container>
      <Text>Some contact data</Text>
      <Link href="/" label="Home" />
    </Container>
  );
};

export default ContactScreen;
