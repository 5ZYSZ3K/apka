import React from 'react';

import {TouchableRipple} from 'react-native-paper';

import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({children, onPress}) => {
  return <TouchableRipple onPress={onPress}>{children}</TouchableRipple>;
};

export default Button;
