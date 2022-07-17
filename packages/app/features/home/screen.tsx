import React from 'react';
import {Text} from 'react-native';

import Button from 'app/components/Button';
import Link from 'app/components/Link';
import {TextLink} from 'solito/link';

import {Container} from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Link href="/contact" label="Contact Page" />
      <Link href="/instructions" label="Instructions Page" />
    </Container>
  );
};

export default HomeScreen;
