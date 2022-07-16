import React from 'react';
import {View, Text} from 'react-native';

import Button from 'app/components/Button';
import LinkButton from 'app/components/LinkButton';
import {TextLink} from 'solito/link';
import {MotiLink} from 'solito/moti';

import {Container} from './styles';

export function HomeScreen() {
  return (
    <Container>
      <TextLink
        href="/user/fernando"
        textProps={{
          style: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'blue',
          },
        }}>
        <Button>
          <Text>Regular Link</Text>
        </Button>
      </TextLink>
      <LinkButton href="/user/fernando" label="Moti Link" />
    </Container>
  );
}
