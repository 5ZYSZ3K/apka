import React from 'react';
import {Text, StyleSheet} from 'react-native';

import Link from '@app/components/Link';
import {MotiView} from 'moti';

import {INSTRUCTIONS_SCREEN_LABEL} from './consts';
import {Container} from './styles';

const InstructionsScreen: React.FC = () => {
  return (
    <Container>
      <MotiView
        from={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{type: 'timing'}}
        style={styles.container}
      />
      <Text>{INSTRUCTIONS_SCREEN_LABEL}</Text>
      <Link href="/" label="Home" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

export default InstructionsScreen;
