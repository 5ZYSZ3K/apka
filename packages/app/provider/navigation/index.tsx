import React, {useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import * as Linking from 'expo-linking';

import {NavigationProviderProps} from './types';

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              contact: 'contact',
              instructions: 'instructions',
            },
          },
        }),
        [],
      )}>
      {children}
    </NavigationContainer>
  );
};
