import React from 'react';
import {Text} from 'react-native';

import {MotiLink} from 'solito/moti';

import {LinkProps} from './types';

const Link: React.FC<LinkProps> = ({href, label}) => {
  return (
    <MotiLink
      href={href}
      animate={({hovered, pressed}) => {
        'worklet';

        return {
          scale: pressed ? 0.95 : hovered ? 1.1 : 1,
          rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
        };
      }}
      transition={{
        type: 'timing',
        duration: 150,
      }}>
      <Text>{label}</Text>
    </MotiLink>
  );
};

export default Link;
