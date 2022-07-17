import React from 'react';
import {Text} from 'react-native';

import LinkButton from 'app/components/LinkButton';

import {Container} from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <LinkButton href="/contact">
        <Text>Contact Page</Text>
      </LinkButton>
      <LinkButton href="/instructions">
        <Text>Instructions Page</Text>
      </LinkButton>
    </Container>
  );
};

export default HomeScreen;
