import React from 'react';

import {NavigationProvider} from './navigation';
import {SafeArea} from './safe-area';

export const Provider: React.FC = ({children}) => {
  return (
    <NavigationProvider>
      <SafeArea>{children}</SafeArea>
    </NavigationProvider>
  );
};
