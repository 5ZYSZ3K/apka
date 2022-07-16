import {Text} from 'react-native';

import Button from 'app/components/Button';
import {MotiLink} from 'solito/moti';

import {LinkButtonProps} from './types';

const LinkButton: React.FC<LinkButtonProps> = ({href, label}) => {
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
      <Button>
        <Text>{label}</Text>
      </Button>
    </MotiLink>
  );
};

export default LinkButton;
