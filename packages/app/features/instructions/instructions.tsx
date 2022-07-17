import React from 'react';
import {Text} from 'react-native';

import Link from 'app/components/Link';

import {Container} from './styles';

const InstructionsScreen: React.FC = () => {
  return (
    <Container>
      <Text>Instructions data</Text>
      <Link href="/" label="Home" />
    </Container>
  );
};

export default InstructionsScreen;
