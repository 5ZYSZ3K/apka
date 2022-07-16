import React from 'react';

import {TouchableRipple} from 'react-native-paper';

const Button: React.FC = ({children}) => {
  return <TouchableRipple onPress={console.log}>{children}</TouchableRipple>;
};

export default Button;
