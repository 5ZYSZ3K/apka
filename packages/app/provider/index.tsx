import React from 'react';

import {NavigationProvider} from './navigation';
import {SafeArea} from './safe-area';
import {ProviderProps} from './types';

const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <NavigationProvider>
      <SafeArea>{children}</SafeArea>
    </NavigationProvider>
  );
};

export {Provider};
